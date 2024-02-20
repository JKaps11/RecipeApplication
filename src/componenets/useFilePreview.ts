import { useEffect, useState } from "react";

export default function useFilePreview(file: File[]) {
    const [imgSrc, setImgSrc] = useState("");

    useEffect(() => {
        let fileToPreview: File = file[0]
        if (file && fileToPreview) {
            const newUrl = URL.createObjectURL(fileToPreview);

            if (newUrl !== imgSrc) {
                setImgSrc(newUrl);
            }
        }
    }, [file]);

    return [imgSrc, setImgSrc];
}