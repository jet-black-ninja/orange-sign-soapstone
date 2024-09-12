import {apiURL} from "../lib/urls"
import {Message} from "../types"
import axios from "axios"

export const getMessage = async () => {
    const response = await axios.get<Message[]>(apiURL+ "message");
    return response.data;
}