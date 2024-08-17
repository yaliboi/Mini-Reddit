export const trashDbFunction = async (id) => {
    const postResult = await queryDb("DELETE FROM posts where id=$1 returning id, authorid, title, body;", [id])
    return postResult
}