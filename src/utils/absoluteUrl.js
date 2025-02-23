import siteConfig from "./siteConfig"
import { relativeUrl } from "../../utils/relativeUrl"

export default function absoluteUrl(url) {
    return `${siteConfig.siteUrl}${relativeUrl(url)}`
}
