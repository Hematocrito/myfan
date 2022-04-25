import { useRouter } from "next/router";
import { useEffect } from "react";

export const DefaultRoute = (props: { route: string }) => {
  const router = useRouter();

  useEffect(() => {
    router.push(props.route);
  }, []);

  return <div></div>;
};
