import { useRouter } from "next/router";

/**
 * 実績を表示するコンポーネントです。
 */
const Work = () => {
  const router = useRouter();
  const { workId } = router.query;
  return <div>{workId}</div>;
};

export default Work;
