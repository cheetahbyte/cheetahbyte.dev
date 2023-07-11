import { error } from "@sveltejs/kit";
import { TEST } from "$lib/server/secrets.js";

export function GET({ url }) {
    return new Response(TEST)
}