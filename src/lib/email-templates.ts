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
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charSet="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New project inquiry</title>
  </head>
  <body style="margin:0;padding:0;background-color:#0C0C0C;">
    <table width="100%" cellPadding="0" cellSpacing="0" role="presentation"
      style="background-color:#0C0C0C;padding:32px 16px;">
      <tr>
        <td align="center">
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
            style="max-width:640px;background-color:#141414;
            border-radius:14px;border:1px solid #1C1C1C;
            overflow:hidden;">
            
            <!-- Header -->
            <tr>
              <td style="padding:24px 28px 16px;border-bottom:1px solid #1C1C1C;">
                <p style="
                  margin:0 0 6px;
                  font-family:'Courier New',monospace;
                  font-size:11px;
                  letter-spacing:0.16em;
                  text-transform:uppercase;
                  color:#D97706;
                ">
                  adrianoliver.dev
                </p>
                <p style="
                  margin:0;
                  font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
                  font-size:22px;
                  line-height:1.3;
                  font-weight:500;
                  color:#F5F0E8;
                ">
                  New project inquiry
                </p>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:24px 28px 28px;">
                
                <p style="
                  margin:0 0 20px;
                  font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
                  font-size:15px;
                  line-height:1.6;
                  color:#D6CEC4;
                ">
                  Someone just filled out the contact form on your portfolio.
                  Here are the details:
                </p>

                ${[
                  ['Name', name],
                  ['Email', email],
                  ['Budget', budget],
                ]
                  .map(
                    ([label, value]) => `
                  <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                    style="margin:0 0 14px;">
                    <tr>
                      <td style="
                        font-family:'Courier New',monospace;
                        font-size:11px;
                        letter-spacing:0.12em;
                        text-transform:uppercase;
                        color:#78716C;
                        padding:0 0 4px;
                      ">
                        ${label}
                      </td>
                    </tr>
                    <tr>
                      <td style="
                        font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
                        font-size:15px;
                        line-height:1.5;
                        color:#F5F0E8;
                        background-color:#0C0C0C;
                        border-radius:8px;
                        border:1px solid #1C1C1C;
                        padding:10px 14px;
                      ">
                        ${
                          label === 'Email'
                            ? `<a href="mailto:${value}" style="
                                  color:#D97706 !important;
                                  text-decoration:none;
                                ">${value}</a>`
                            : value
                        }
                      </td>
                    </tr>
                  </table>
                `,
                  )
                  .join('')}

                <!-- Message -->
                <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
                  style="margin:6px 0 24px;">
                  <tr>
                    <td style="
                      font-family:'Courier New',monospace;
                      font-size:11px;
                      letter-spacing:0.12em;
                      text-transform:uppercase;
                      color:#78716C;
                      padding:0 0 4px;
                    ">
                      Message
                    </td>
                  </tr>
                  <tr>
                    <td style="
                      font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
                      font-size:15px;
                      line-height:1.6;
                      color:#F5F0E8;
                      background-color:#0C0C0C;
                      border-radius:8px;
                      border:1px solid #1C1C1C;
                      padding:14px;
                      white-space:pre-wrap;
                    ">
                      ${message}
                    </td>
                  </tr>
                </table>

                <!-- CTA -->
                <table cellpadding="0" cellspacing="0" role="presentation"
                  style="margin:0 0 8px;">
                  <tr>
                    <td>
                      <a href="mailto:${email}"
                        style="
                          display:inline-block;
                          font-family:'Courier New',monospace;
                          font-size:13px;
                          font-weight:600;
                          color:#0C0C0C !important;
                          text-decoration:none;
                          background-color:#D97706;
                          padding:11px 22px;
                          border-radius:999px;
                        ">
                        Reply to ${name} →
                      </a>
                    </td>
                  </tr>
                </table>

                <p style="
                  margin:6px 0 0;
                  font-family:'Courier New',monospace;
                  font-size:11px;
                  color:#78716C;
                ">
                  Tip: reply within 24h while intent is highest.
                </p>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="
                padding:16px 28px 20px;
                border-top:1px solid #1C1C1C;
              ">
                <p style="
                  margin:0;
                  font-family:'Courier New',monospace;
                  font-size:11px;
                  color:#78716C;
                ">
                  adrianoliver.dev · internal notification
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `.trim()
}

export function confirmationEmailHtml({ name }: { name: string }): string {
  return `
<!DOCTYPE html>
<html>
  <head>
    <meta charSet="utf-8" />
    <meta http-equiv="x-ua-compatible" content="ie=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Message received</title>
  </head>
  <body style="margin:0;padding:0;background-color:#0C0C0C;">
    <table width="100%" cellPadding="0" cellSpacing="0" role="presentation"
      style="background-color:#0C0C0C;padding:32px 16px;">
      <tr>
        <td align="center">
          <table width="100%" cellpadding="0" cellspacing="0" role="presentation"
            style="max-width:640px;background-color:#141414;
            border-radius:14px;border:1px solid #1C1C1C;
            overflow:hidden;">

            <!-- Header -->
            <tr>
              <td style="padding:32px 28px 18px;border-bottom:1px solid #1C1C1C;">
                <p style="
                  margin:0 0 8px;
                  font-family:'Courier New',monospace;
                  font-size:11px;
                  letter-spacing:0.16em;
                  text-transform:uppercase;
                  color:#D97706;
                ">
                  adrianoliver.dev
                </p>
                <p style="
                  margin:0;
                  font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
                  font-size:22px;
                  line-height:1.3;
                  font-weight:500;
                  color:#F5F0E8;
                ">
                  Message received, ${name}.
                </p>
              </td>
            </tr>

            <!-- Body -->
            <tr>
              <td style="padding:24px 28px 24px;">
                <p style="
                  margin:0 0 16px;
                  font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
                  font-size:15px;
                  line-height:1.6;
                  color:#D6CEC4;
                ">
                  Thanks for reaching out. I read every inquiry personally and
                  reply within <span style="color:#F5F0E8;">24 hours</span>.
                  If your project has a tight deadline, mention it and I'll
                  prioritize accordingly.
                </p>

                <p style="
                  margin:0 0 24px;
                  font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
                  font-size:15px;
                  line-height:1.6;
                  color:#D6CEC4;
                ">
                  While you wait, you can see how I build e-commerce and
                  business apps here:
                  <a href="https://adrianoliver.dev/work"
                    style="
                      color:#D97706 !important;
                      text-decoration:none;
                    ">
                      adrianoliver.dev/work
                  </a>.
                </p>

                <table cellpadding="0" cellspacing="0" role="presentation"
                  style="border-top:1px solid #1C1C1C;padding-top:20px;width:100%;">
                  <tr>
                    <td>
                      <p style="
                        margin:0 0 2px;
                        font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;
                        font-size:14px;
                        line-height:1.4;
                        color:#F5F0E8;
                        font-weight:500;
                      ">
                        Adrian Oliver
                      </p>
                      <p style="
                        margin:0;
                        font-family:'Courier New',monospace;
                        font-size:12px;
                        color:#78716C;
                      ">
                        Full-Stack Developer · adrianoliver.dev
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <!-- Footer -->
            <tr>
              <td style="padding:14px 28px 18px;border-top:1px solid #1C1C1C;">
                <p style="
                  margin:0;
                  font-family:'Courier New',monospace;
                  font-size:10px;
                  line-height:1.4;
                  color:#78716C;
                ">
                  You are receiving this because you submitted a contact form
                  at adrianoliver.dev.
                </p>
              </td>
            </tr>

          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `.trim()
}
