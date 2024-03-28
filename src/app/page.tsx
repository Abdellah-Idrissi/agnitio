import { HomeForm } from "@/components/forms/HomeForm";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex-1 lg:mt-10 lg:mb-5">
      <div className="cnt py-7 sm:py-8">
        <div className="flex flex-col gap-y-10 sm:gap-y-11 lg:flex-row lg:gap-x-8 ">
          <div className="text-center lg:w-1/2 lg:text-left">
            <h1 className="text-[32px] font-bold leading-tight sm:text-[35px] md:text-[39px] 9m:text-[40px] lg:text-[43px] ">
              Welcome to Agnitio
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl 9m:text-[25px] font-medium mt-[12px] md:mt-4 lg:!leading-normal ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit
            </p>
            <p className="text-secondary mt-5 mb-7 leading-relaxed sm:text-[17px] md:text-lg sm:leading-[1.65] md:leading-[1.7] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae quo sint aspernatur. Omnis a molestiae autem eligendi,
              rem voluptatem nesciunt optio iusto laborum sit blanditiis iste
              ipsa aspernatur pariatur in.
            </p>
            <Button variant="outline">Learn More</Button>
          </div>

          <HomeForm />
        </div>
      </div>
    </div>
  );
}
