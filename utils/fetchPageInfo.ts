import { PageInfo } from "../typings";

export const fetchSkills = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);
    const data = await res.json();
    const pageInfo: PageInfo = data.projects;
    console.log("fetiching Page Info", pageInfo);
    return pageInfo;
}