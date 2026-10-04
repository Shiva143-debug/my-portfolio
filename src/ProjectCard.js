import { useEffect, useRef, useState } from "react";
import { FaArrowCircleRight } from "react-icons/fa";
import { QRCodeCanvas } from "qrcode.react";
import "./App.css";

const ProjectCard = ({ project, index }) => {
    const { title, description, image, link, category, apk, version, size, } = project;

    const cardRef = useRef(null);

    const [showDownloadModal, setShowDownloadModal] = useState(false);
    const [copied, setCopied] = useState(false);

    const isMobileApplication =
        category === "Mobile Application";

    const hasApk =
        apk && apk !== "YOUR_DIRECT_APK_URL";

    useEffect(() => {
        const node = cardRef.current;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("in");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12 }
        );

        if (node) {
            observer.observe(node);
        }

        return () => {
            if (node) {
                observer.unobserve(node);
            }
        };
    }, [index]);

    // Detect Android / iPhone / iPad
    const isMobileDevice = () => {
        return /Android|iPhone|iPad|iPod/i.test(
            navigator.userAgent
        );
    };

    // Download button handler
    const handleDownload = () => {
        if (!hasApk) {
            setShowDownloadModal(true);
            return;
        }

        // Mobile → directly open APK
        if (isMobileDevice()) {
            const downloadLink =
                document.createElement("a");

            downloadLink.href = apk;
            downloadLink.target = "_blank";
            downloadLink.rel =
                "noopener noreferrer";

            downloadLink.setAttribute(
                "download",
                ""
            );

            document.body.appendChild(
                downloadLink
            );

            downloadLink.click();

            document.body.removeChild(
                downloadLink
            );

            return;
        }

        // Laptop/Desktop → QR popup
        setShowDownloadModal(true);
    };

    // Copy APK URL
    const handleCopyLink = async () => {
        if (!hasApk) {
            return;
        }

        try {
            await navigator.clipboard.writeText(
                apk
            );

            setCopied(true);

            setTimeout(() => {
                setCopied(false);
            }, 2000);
        } catch (error) {
            console.error(
                "Unable to copy APK link:",
                error
            );
        }
    };

    // Open APK
    const handleOpenApk = () => {
        if (!hasApk) {
            return;
        }

        window.open(
            apk,
            "_blank",
            "noopener,noreferrer"
        );
    };

    return (
        <>
            <div className="project-card reveal" ref={cardRef}>
                <img src={image} alt={title} className="project-image" />
                <h3>{title}</h3>
                <p>{description}</p>

                {isMobileApplication ? (
                    <button type="button" className="project-link project-download-button" onClick={handleDownload}>
                        Download App
                    </button>
                ) : (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">
                        View Project{" "}  <FaArrowCircleRight />
                    </a>
                )}
            </div>


            {isMobileApplication &&
                showDownloadModal && (
                    <div className="download-modal-overlay" onClick={() => setShowDownloadModal(false)}>
                        <div className="download-modal" onClick={(event) => event.stopPropagation()}
                            role="dialog" aria-modal="true" aria-labelledby="download-modal-title">
                            <button type="button" onClick={() => setShowDownloadModal(false)} aria-label="Close" className="download-modal-close">
                                ×
                            </button>

                            <h2 id="download-modal-title" className="download-modal-title">
                                Download App
                            </h2>

                            <h3 className="download-modal-project-title">
                                {title}
                            </h3>

                            <p className="download-modal-description">
                                Scan the QR code with your Android phone to download the application.
                            </p>

                            {hasApk ? (
                                <>
                                    <div className="download-qr-frame">
                                        <QRCodeCanvas value={apk} size={220} level="H"
                                            includeMargin={true} />
                                    </div>

                                    <p className="download-qr-hint">
                                        Point your phone camera at the QR code
                                    </p>

                                    <div className="download-apk-info">
                                        <span>  Android APK</span>

                                        <span>  • </span>

                                        <span> Version{" "} {version || "1.0.0"}</span>

                                        <span>  • </span>

                                        <span> {size || "APK"} </span>
                                    </div>

                                    <div className="download-link-row">
                                        <input type="text"
                                            value={apk} readOnly className="download-link-input"
                                            onFocus={(event) => event.target.select()} aria-label="APK download link" />

                                        <button type="button" onClick={handleCopyLink} className="download-copy-button">
                                            {copied ? "Copied!" : "Copy"}
                                        </button>
                                    </div>

                                    <button type="button" onClick={handleOpenApk} className="download-open-button" >
                                        Open APK Link
                                        <span aria-hidden="true">↗</span>
                                    </button>
                                </>
                            ) : (
                                <div className="download-unavailable">
                                    <div className="download-unavailable-icon" aria-hidden="true">
                                        📦
                                    </div>

                                    <h3 className="download-unavailable-title">
                                        APK Link  Coming Soon
                                    </h3>

                                    <p className="download-unavailable-description">
                                        The mobile application is ready, but the APK download link has not been configured yet.
                                    </p>
                                </div>
                            )}

                            <p className="download-modal-hint">
                                Tap outside this window or × to close
                            </p>
                        </div>
                    </div>
                )}
        </>
    );
};

export default ProjectCard;