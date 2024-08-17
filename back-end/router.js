import { trashFunction } from "./controller";

app.delete('/api/posts/:id', trashFunction)