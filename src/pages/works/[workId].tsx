import { useRouter } from "next/router";

const Work = () => {
  const router = useRouter();
  const { workId } = router.query;
  return <div>{workId}</div>;
};

export default Work;
