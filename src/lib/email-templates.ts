export function adminEmailHtml({
  name,
  email,
  budget,
  message,
}: {
  name: string
  email: string
  budget: string
  message: string
}): string {
  const fields: [string, string][] = [
    ['Name', name],
    ['Email', email],
    ['Budget', budget],
  ]

  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#0C0C0C;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0C0C0C;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#141414;border:1px solid #1C1C1C;border-radius:12px;overflow:hidden;">

        <!-- Header -->
        <tr>
          <td style="padding:32px 40px;border-bottom:1px solid #1C1C1C;">
            <p style="margin:0;font-family:'Courier New',monospace;font-size:11px;color:#D97706;letter-spacing:0.15em;text-transform:uppercase;">
              adrianoliver.dev
            </p>
            <h1 style="margin:8px 0 0;font-size:20px;font-weight:400;color:#F5F0E8;">
              New project inquiry
            </h1>
          </td>
        </tr>

        <!-- Fields -->
        <tr>
          <td style="padding:32px 40px;">
            ${fields
              .map(
                ([label, value]) => `
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:16px;">
                <tr>
                  <td style="font-family:'Courier New',monospace;font-size:10px;color:#78716C;letter-spacing:0.1em;text-transform:uppercase;padding-bottom:4px;">
                    ${label}
                  </td>
                </tr>
                <tr>
                  <td style="font-size:14px;color:#F5F0E8;background:#0C0C0C;border:1px solid #1C1C1C;border-radius:8px;padding:10px 14px;">
                    ${value}
                  </td>
                </tr>
              </table>
            `
              )
              .join('')}

            <!-- Message -->
            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
              <tr>
                <td style="font-family:'Courier New',monospace;font-size:10px;color:#78716C;letter-spacing:0.1em;text-transform:uppercase;padding-bottom:4px;">
                  Message
                </td>
              </tr>
              <tr>
                <td style="font-size:14px;color:#F5F0E8;background:#0C0C0C;border:1px solid #1C1C1C;border-radius:8px;padding:14px;white-space:pre-wrap;line-height:1.6;">
                  ${message}
                </td>
              </tr>
            </table>

            <!-- CTA -->
            <a href="mailto:${email}" style="display:inline-block;background:#D97706;color:#0C0C0C;font-family:'Courier New',monospace;font-size:13px;font-weight:600;padding:12px 24px;border-radius:8px;text-decoration:none;">
              Reply to ${name} &rarr;
            </a>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:20px 40px;border-top:1px solid #1C1C1C;">
            <p style="margin:0;font-family:'Courier New',monospace;font-size:11px;color:#78716C;">
              adrianoliver.dev &middot; automated notification
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
  `.trim()
}

export function confirmationEmailHtml({ name }: { name: string }): string {
  return `
<!DOCTYPE html>
<html>
<head><meta charset="utf-8" /></head>
<body style="margin:0;padding:0;background:#0C0C0C;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0C0C0C;padding:40px 20px;">
    <tr><td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#141414;border:1px solid #1C1C1C;border-radius:12px;overflow:hidden;">

        <!-- Header -->
        <tr>
          <td style="padding:40px 40px 32px;border-bottom:1px solid #1C1C1C;">
            <p style="margin:0 0 12px;font-family:'Courier New',monospace;font-size:11px;color:#D97706;letter-spacing:0.15em;text-transform:uppercase;">
              adrianoliver.dev
            </p>
            <h1 style="margin:0;font-size:24px;font-weight:400;color:#F5F0E8;line-height:1.3;">
              Message received, ${name}.
            </h1>
          </td>
        </tr>

        <!-- Body -->
        <tr>
          <td style="padding:32px 40px;">
            <p style="margin:0 0 20px;font-size:15px;color:#78716C;line-height:1.7;">
              I review every inquiry personally and reply within
              <span style="color:#F5F0E8;">24 hours</span>.
              If your project has a tight timeline, mention it in a follow-up &mdash; I&apos;ll prioritize accordingly.
            </p>
            <p style="margin:0 0 32px;font-size:15px;color:#78716C;line-height:1.7;">
              In the meantime, you can review my recent work at
              <a href="https://adrianoliver.dev/work" style="color:#D97706;text-decoration:none;">
                adrianoliver.dev/work
              </a>.
            </p>

            <!-- Signature block -->
            <table cellpadding="0" cellspacing="0" style="border-top:1px solid #1C1C1C;padding-top:24px;width:100%;">
              <tr>
                <td>
                  <p style="margin:0 0 2px;font-size:14px;color:#F5F0E8;font-weight:500;">
                    Adrian Oliver
                  </p>
                  <p style="margin:0;font-family:'Courier New',monospace;font-size:12px;color:#78716C;">
                    Full-Stack Developer &middot; adrianoliver.dev
                  </p>
                </td>
              </tr>
            </table>
          </td>
        </tr>

        <!-- Footer -->
        <tr>
          <td style="padding:16px 40px;border-top:1px solid #1C1C1C;">
            <p style="margin:0;font-family:'Courier New',monospace;font-size:10px;color:#78716C;">
              You are receiving this because you submitted a contact form at adrianoliver.dev
            </p>
          </td>
        </tr>

      </table>
    </td></tr>
  </table>
</body>
</html>
  `.trim()
}
