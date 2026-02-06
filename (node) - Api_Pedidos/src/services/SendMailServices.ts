import Handlebars from "handlebars";
import nodemailer, { type Transporter } from "nodemailer";
import fs from "fs";

class SendMailService {
  private client!: Transporter;
  constructor() {
    nodemailer.createTestAccount().then((account) => {
      const transport = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });

      this.client = transport;
    });
  }

  async execute(to: string, subject: string, variables: object, path: string) {
    const templateFileContent = fs.readFileSync(path).toString("utf-8");

    const mailTemplateParse = Handlebars.compile(templateFileContent);

    const html = mailTemplateParse(variables);
    const message = await this.client.sendMail({
      to,
      subject,
      html: html,
      from: "NPS <noreplay@nps.com.br>",
    });

    console.log("Message send: %s", message.messageId);
    console.log("Message URL: %s", nodemailer.getTestMessageUrl(message));
  }
}

export default new SendMailService();
