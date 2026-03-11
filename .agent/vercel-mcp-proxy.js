const { spawn } = require('child_process');

// The 22 most essential allowed tools
const allowedTools = [
  "vercel_list_projects",
  "vercel_get_project",
  "vercel_create_project",
  "vercel_update_project",
  "vercel_delete_project",
  "vercel_list_deployments",
  "vercel_get_deployment",
  "vercel_get_deployment_build_logs",
  "vercel_get_runtime_logs",
  "vercel_deploy_to_vercel",
  "vercel_list_teams",
  "vercel_list_team_projects",
  "vercel_get_project_status",
  "vercel_quick_status",
  "vercel_project_health_check",
  "vercel_analyze_deployment_performance",
  "vercel_debug_deployment_issues",
  "vercel_check_domain_availability_and_price",
  "vercel_search_vercel_documentation",
  "vercel_explain_vercel_concept",
  "vercel_troubleshoot_common_issues",
  "vercel_system_instructions"
];

const mcp = spawn('npx', ['-y', '@robinson_ai_systems/vercel-mcp'], {
  stdio: ['pipe', 'pipe', 'inherit'],
  env: process.env,
  shell: process.platform === 'win32' // Fix ENOENT when launching npx on Windows
});

// Forward incoming messages to the actual MCP
process.stdin.pipe(mcp.stdin);

let buffer = '';
mcp.stdout.on('data', chunk => {
  buffer += chunk.toString();
  let lines = buffer.split('\n');
  buffer = lines.pop(); // keep the incomplete ending line in buffer

  for (let line of lines) {
    if (!line.trim()) continue;
    try {
      let msg = JSON.parse(line);
      // Filter tools/list response
      if (msg.result && msg.result.tools) {
        msg.result.tools = msg.result.tools.filter(t => allowedTools.includes(t.name));
        process.stdout.write(JSON.stringify(msg) + '\n');
      } else {
        process.stdout.write(line + '\n');
      }
    } catch (e) {
      // If parsing fails, just pass it through
      process.stdout.write(line + '\n');
    }
  }
});

mcp.on('exit', code => process.exit(code));
