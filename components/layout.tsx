import Header from "@/components/header";

type LayoutProps = {
  children: JSX.Element;
};

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Header />
      <main className="w-ful sm:w-[75%] my-4 mx-auto sm:px-12">
        {props.children}
      </main>
    </>
  );
}
