import { useEffect, useState } from "react";

export default function useFilePreview(fileList: FileList) {
    const [imgSrc, setImgSrc] = useState("");

    useEffect(() => {
        if (fileList && fileList[0]) {
            console.log(fileList[0]);
            const newUrl = URL.createObjectURL(fileList[0]);
            console.log(newUrl);
            if (newUrl !== imgSrc) {
                setImgSrc(newUrl);
            }
        }
    }, [fileList]);

    return [imgSrc, setImgSrc];
}
