import {
    XmlItemType,
    XmlObject,
    XmlXPathSelector,
} from "../../xml-js-mapper";

@XmlObject({
    epub: "http://www.idpf.org/2007/ops",
    smil: "http://www.w3.org/ns/SMIL",
})
export class Audio {
    @XmlXPathSelector("@src")
    public Src: string;

    @XmlXPathSelector("@clipBegin")
    public ClipBegin: string;

    @XmlXPathSelector("@clipEnd")
    public ClipEnd: string;
}