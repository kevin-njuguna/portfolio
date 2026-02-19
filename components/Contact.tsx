import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 py-8 mt-10">
      <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-center text-sm md:text-left text-white/40 ">
        <div className="flex justify-center md:justify-start gap-10">
          <a href="https://github.com/kevin-njuguna" target="_blank">
            <Github size={16} className="hover:text-white transition" />
          </a>

          <a
            href="https://www.linkedin.com/in/kevin-njuguna-815098267"
            target="_blank"
          >
            <Linkedin size={16} className="hover:text-white transition" />
          </a>

          <a href="mailto:kevy.kamah@gmail.com">
            <Mail size={16} className="hover:text-white transition" />
          </a>
        </div>

        <div className="text-center">&copy; Nairobi, Kenya</div>

        <div className="text-center md:text-right">
          {new Date().getFullYear()}
        </div>
      </div>
    </footer>
  );
}
