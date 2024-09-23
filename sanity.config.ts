import {defineConfig} from "sanity";
import { deskTool } from "sanity/desk";
import schemas from "./sanity/schemas";


const config =defineConfig({
    projectId:"w8ybtzz3",
    dataset:"production",
    title:"my personal website",
    apiVersion:"23-09-2024",
    basePath:"/admin",
    plugins:[deskTool()],
    schema:{types:schemas}
})

export default config;