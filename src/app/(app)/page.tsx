import Container from "@/components/ui/container";
import ConverterComponent from "./components/ConverterComponent";

export default function Home() {
  return (
    <Container className="flex gap-5 flex-col ">
      <div className="pt-20 space-y-5 md:max-w-[70%] mx-auto pb-10">
        <h1 className="text-5xl font-bold text-center">
          Transform Your Media Instantly Free & Lightning Fast
        </h1>
        <p className="text-muted-foreground text-pretty text-center">
          Welcome to 2RS Converter, your ultimate solution for transforming
          images, videos, and audio files into different formats effortlessly.
          Enjoy super fast, high-quality conversions at no cost. Simply upload
          your media, select the desired format, and let 2RS Converter handle
          the rest. Experience the future of media conversion today quick, easy,
          and absolutely free!
        </p>
      </div>
      <ConverterComponent />
    </Container>
  );
}
