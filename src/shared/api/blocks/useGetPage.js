import axios from "axios";

export default async function (pageId) {
    return await axios.get(
        `https://api.myfalke.ru/api/v1/content/page/${pageId}?block_detail`,
    )
}