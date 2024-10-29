import { Query, type Databases } from "node-appwrite";

import { DATABASE_ID, MEMBERS_ID } from "@/config";

interface getMemberInterface  {
    databases : Databases ,
    userId : string,
    workspaceId: string

}

export const getMember = async({databases ,userId ,workspaceId } : getMemberInterface) => {
        const members = await databases.listDocuments(
            DATABASE_ID,
            MEMBERS_ID,
            [
                Query.equal('workspaceId' , workspaceId),
                Query.equal('userId' , userId),
                
            ]
        )

        return members.documents[0]
}