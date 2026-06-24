"use client"

import { authClient } from "@/auth-client";
import { useQuery } from "@tanstack/react-query";

export function TEST() {
    const session = authClient.useSession();

    console.log(session.data);

    const query = useQuery({
        queryKey: ['playlist'], queryFn: () => {
            return fetch("/api/spotify/v1/me/", {
                headers: {
                    "Authorization": `Bearer ${session.data?.session.token}`
                },
                method: "GET"
            })
        }
        ,enabled: !!session.data?.session.token
    })

    return (
        <div>


            <pre>{JSON.stringify(session, null, 2)}</pre>
            <pre>{JSON.stringify(query.data, null, 2)}</pre>
        </div>


    )
}