import { Linkedin } from "lucide-react";
import { Mail } from 'lucide-react';
import { Github } from 'lucide-react';

export function Footer() {
  return (
    <div class=" bg-[#EFEEEB] font-[Poppins] px-4 py-10 flex flex-col justify-center items-center gap-6 lg:flex-row lg:justify-between lg:px-28 lg:py-14">
      <div className="contact flex flex-row gap-6">
        <div className="get-in-touch-text font-[500]">Get in touch</div>
        <div className="icon-link flex flex-row gap-4">
          <Linkedin />
          <Github />
          <Mail />
          
        </div>
      </div>
      <a class="home-page-link font-[500] underline">Home page</a>
    </div>
  );
}
