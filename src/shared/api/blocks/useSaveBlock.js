import axios from "axios";

export default async function (bocks, pageId) {
    await axios.post(
        `https://api.myfalke.ru/api/v1/content/block/as_single`,
        {
            page_id: pageId,
            data: bocks
        }
    ).then((response) => {
        alert('Сохранено')
    }).catch(() => {
        alert('Произошла ошибка, повторите позднее')
    })
}