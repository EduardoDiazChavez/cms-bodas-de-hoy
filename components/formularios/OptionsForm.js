export const OptionsForm = ({ alertDev, setAlertDev, schema, user }) => {

    return (
        <div className="bg-white rounded-2xl pt-2.5 pr-3.5 pb-2.5 pl-3.5 flex flex-col gap-2.5 items-start justify-start shrink-0 w-[250px] relative" style={{ boxShadow: "var(--_01-shadows-light-z-card-box-shadow, 0px 12px 24px -4px rgba(145, 158, 171, 0.12), 0px 0px 2px 0px rgba(145, 158, 171, 0.20))" }}>

            <div className="flex flex-row gap-[2px] items-center justify-end self-stretch shrink-0 relative" >
                <div className="text-sm font-bold text-left relative flex-1">
                    Publico
                </div>
            </div>

            <div className="flex flex-row gap-[3px] items-center justify-center shrink-0 w-[250px]* h-9 relative" >

                <button type="submit" className="text-white text-sm relative bg-green-700 rounded-lg pt-[11px] pr-[22px] pb-[11px] pl-[22px] flex flex-row gap-0 items-center justify-center shrink-0 w-[100px] h-[30px] relative" style={{ boxShadow: "4px 4px 4px 0px rgba(4, 120, 87, 0.25)" }}>
                    Guardar
                </button>

                <button type="button" onClick={() => setAlertDev(!alertDev)} className=" text-white text-sm relative bg-green-700 rounded-lg pt-[11px] *pr-[2px] pb-[11px] *pl-[2px] flex flex-row  items-center justify-center shrink-0 w-[120px] h-[30px] relative" style={{ boxShadow: "4px 4px 4px 0px rgba(4, 120, 87, 0.25)" }}>
                    Pre-visualizar
                </button>

            </div>

            <div className="flex flex-row gap-[2px] items-center justify-start shrink-0 w-[209px] relative" >

                <svg className="pt-0.5 pr-0 pb-0.5 pl-0 flex flex-row gap-2.5 items-center justify-center shrink-0 relative overflow-visible" style={{}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 10C13.0609 10 14.0783 9.57857 14.8284 8.82843C15.5786 8.07828 16 7.06087 16 6C16 4.93913 15.5786 3.92172 14.8284 3.17157C14.0783 2.42143 13.0609 2 12 2C10.9391 2 9.92172 2.42143 9.17157 3.17157C8.42143 3.92172 8 4.93913 8 6C8 7.06087 8.42143 8.07828 9.17157 8.82843C9.92172 9.57857 10.9391 10 12 10ZM12 10V22" stroke="#637381" strokeWidth="2" />
                </svg>


                <div className="flex flex-row gap-[5px] items-start justify-start shrink-0 relative" >

                    <div className=" text-sm  relative" >
                        Estatus:
                    </div>

                    <div className=" text-sm relative" >
                        Redactando
                    </div>

                </div>

                <svg className="rounded-lg p-[5px] flex flex-row gap-2.5 items-start justify-start shrink-0 relative overflow-visible" style={{}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_520_11905)">
                        <rect width="24" height="24" rx="8" fill="white" shapeRendering="crispEdges" />
                        <path d="M13.441 7.18265L15.3765 5.24714C15.5348 5.0889 15.7494 5 15.9733 5C16.1971 5 16.4117 5.0889 16.57 5.24714L18.7529 7.42997C18.9111 7.58826 19 7.80292 19 8.02675C19 8.25057 18.9111 8.46523 18.7529 8.62352L16.8173 10.559M13.441 7.18265L5.24732 15.3763C5.08901 15.5346 5.00005 15.7492 5 15.9731V18.1559C5 18.3798 5.08893 18.5945 5.24723 18.7528C5.40553 18.9111 5.62023 19 5.8441 19H8.02693C8.25078 19 8.46544 18.911 8.62371 18.7527L16.8173 10.559M13.441 7.18265L16.8173 10.559" stroke="#14532D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <rect x="0.25" y="0.25" width="23.5" height="23.5" rx="7.75" stroke="#047857" strokeWidth="0.5" shapeRendering="crispEdges" />
                    </g>
                    <defs>
                        <filter id="filter0_d_520_11905" x="0" y="0" width="28" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="2" dy="2" />
                            <feGaussianBlur stdDeviation="1" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_520_11905" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_520_11905" result="shape" />
                        </filter>
                    </defs>
                </svg>


            </div>

            <div className="flex flex-row gap-[2px] items-center justify-start shrink-0 w-[212px] relative" >

                <div className="flex flex-row gap-0 items-start justify-start shrink-0 relative" >

                    <svg className="shrink-0 relative overflow-visible" style={{}} width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 4.5C7 4.5 2.73 7.61 1 12C2.73 16.39 7 19.5 12 19.5C17 19.5 21.27 16.39 23 12C21.27 7.61 17 4.5 12 4.5ZM12 17C9.24 17 7 14.76 7 12C7 9.24 9.24 7 12 7C14.76 7 17 9.24 17 12C17 14.76 14.76 17 12 17ZM12 9C10.34 9 9 10.34 9 12C9 13.66 10.34 15 12 15C13.66 15 15 13.66 15 12C15 10.34 13.66 9 12 9Z" fill="#637381" />
                    </svg>


                </div>

                <div className="flex flex-row gap-[5px] items-start justify-start shrink-0 relative" >

                    <div className="text-sm  relative" >
                        Visibilidad:
                    </div>

                    <div className=" text-sm relative" >
                        Publica
                    </div>

                </div>

                <svg className="rounded-lg p-[5px] flex flex-row gap-2.5 items-start justify-start shrink-0 relative overflow-visible" style={{}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_520_11907)">
                        <rect width="24" height="24" rx="8" fill="white" shapeRendering="crispEdges" />
                        <path d="M13.441 7.18265L15.3765 5.24714C15.5348 5.0889 15.7494 5 15.9733 5C16.1971 5 16.4117 5.0889 16.57 5.24714L18.7529 7.42997C18.9111 7.58826 19 7.80292 19 8.02675C19 8.25057 18.9111 8.46523 18.7529 8.62352L16.8173 10.559M13.441 7.18265L5.24732 15.3763C5.08901 15.5346 5.00005 15.7492 5 15.9731V18.1559C5 18.3798 5.08893 18.5945 5.24723 18.7528C5.40553 18.9111 5.62023 19 5.8441 19H8.02693C8.25078 19 8.46544 18.911 8.62371 18.7527L16.8173 10.559M13.441 7.18265L16.8173 10.559" stroke="#14532D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <rect x="0.25" y="0.25" width="23.5" height="23.5" rx="7.75" stroke="#047857" strokeWidth="0.5" shapeRendering="crispEdges" />
                    </g>
                    <defs>
                        <filter id="filter0_d_520_11907" x="0" y="0" width="28" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="2" dy="2" />
                            <feGaussianBlur stdDeviation="1" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_520_11907" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_520_11907" result="shape" />
                        </filter>
                    </defs>
                </svg>


            </div>

            <div className="flex flex-row gap-[2px] items-center justify-start shrink-0 w-[212px] relative" >

                <svg className="shrink-0 relative overflow-visible" style={{}} width="18" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0_395_9913)">
                        <path d="M8.14289 12.8572H0.857178V23.1429H8.14289M8.14289 23.1429V7.71432H15.8572M8.14289 23.1429H15.8572M15.8572 23.1429H23.1429V0.857178H15.8572V23.1429Z" stroke="#637381" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </g>
                    <defs>
                        <clipPath id="clip0_395_9913">
                            <rect width="24" height="24" fill="white" />
                        </clipPath>
                    </defs>
                </svg>


                <div className="flex flex-row gap-[5px] items-start justify-start shrink-0 relative" >

                    <div className="text-sm relative" >
                        Visitas
                    </div>

                    <div className="text-sm relative" >
                        0
                    </div>

                </div>

                <svg className="rounded-lg p-[5px] flex flex-row gap-2.5 items-start justify-start shrink-0 relative overflow-visible" style={{}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_520_11909)">
                        <rect width="24" height="24" rx="8" fill="white" shapeRendering="crispEdges" />
                        <path d="M13.441 7.18265L15.3765 5.24714C15.5348 5.0889 15.7494 5 15.9733 5C16.1971 5 16.4117 5.0889 16.57 5.24714L18.7529 7.42997C18.9111 7.58826 19 7.80292 19 8.02675C19 8.25057 18.9111 8.46523 18.7529 8.62352L16.8173 10.559M13.441 7.18265L5.24732 15.3763C5.08901 15.5346 5.00005 15.7492 5 15.9731V18.1559C5 18.3798 5.08893 18.5945 5.24723 18.7528C5.40553 18.9111 5.62023 19 5.8441 19H8.02693C8.25078 19 8.46544 18.911 8.62371 18.7527L16.8173 10.559M13.441 7.18265L16.8173 10.559" stroke="#14532D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <rect x="0.25" y="0.25" width="23.5" height="23.5" rx="7.75" stroke="#047857" strokeWidth="0.5" shapeRendering="crispEdges" />
                    </g>
                    <defs>
                        <filter id="filter0_d_520_11909" x="0" y="0" width="28" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="2" dy="2" />
                            <feGaussianBlur stdDeviation="1" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_520_11909" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_520_11909" result="shape" />
                        </filter>
                    </defs>
                </svg>


            </div>

            <div className="flex flex-row gap-[2px] items-center justify-start shrink-0 w-[250px] relative" >

                <svg className="shrink-0 relative overflow-visible" style={{}} width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 10V12H7V10H9ZM13 10V12H11V10H13ZM17 10V12H15V10H17ZM19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H6V1H8V3H16V1H18V3H19ZM19 19V8H5V19H19ZM9 14V16H7V14H9ZM13 14V16H11V14H13ZM17 14V16H15V14H17Z" fill="#637381" />
                </svg>


                <div className="flex flex-row gap-[5px] items-start justify-start shrink-0 relative" >

                    <div className="text-sm relative" >
                        Publicar:
                    </div>

                    <div className="text-sm relative" >
                        Inmediatamente
                    </div>

                </div>

                <svg className="rounded-lg p-[5px] flex flex-row gap-2.5 items-start justify-start shrink-0 relative overflow-visible" style={{}} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g filter="url(#filter0_d_520_11911)">
                        <rect width="24" height="24" rx="8" fill="white" shapeRendering="crispEdges" />
                        <path d="M13.441 7.18265L15.3765 5.24714C15.5348 5.0889 15.7494 5 15.9733 5C16.1971 5 16.4117 5.0889 16.57 5.24714L18.7529 7.42997C18.9111 7.58826 19 7.80292 19 8.02675C19 8.25057 18.9111 8.46523 18.7529 8.62352L16.8173 10.559M13.441 7.18265L5.24732 15.3763C5.08901 15.5346 5.00005 15.7492 5 15.9731V18.1559C5 18.3798 5.08893 18.5945 5.24723 18.7528C5.40553 18.9111 5.62023 19 5.8441 19H8.02693C8.25078 19 8.46544 18.911 8.62371 18.7527L16.8173 10.559M13.441 7.18265L16.8173 10.559" stroke="#14532D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        <rect x="0.25" y="0.25" width="23.5" height="23.5" rx="7.75" stroke="#047857" strokeWidth="0.5" shapeRendering="crispEdges" />
                    </g>
                    <defs>
                        <filter id="filter0_d_520_11911" x="0" y="0" width="28" height="28" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                            <feOffset dx="2" dy="2" />
                            <feGaussianBlur stdDeviation="1" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_520_11911" />
                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_520_11911" result="shape" />
                        </filter>
                    </defs>
                </svg>


            </div>

            <div className="flex flex-row gap-4 items-center justify-center shrink-0 w-[100%] relative" >
                {schema && schema?.map((item, idx) => {
                    const valir = !item?.roles ? true : item?.roles?.some(role => user?.role.includes(role))
                    switch (valir && item.type) {
                        case "switch":
                            return (
                                <SwitchField
                                    key={idx}
                                    name={item.accessor}
                                    label={item.Header}
                                />
                            );
                            break;
                    }
                })}
                {/* <div className="bg-green-700 rounded-lg pt-[11px] pr-[22px] pb-[11px] pl-[22px] flex flex-row gap-0 items-center justify-center shrink-0 w-[110px]* h-[30px] relative" style={{ boxShadow: "var(--_01-shadows-color-01-primary-box-shadow, 0px 8px 16px 0px rgba(0, 171, 85, 0.24))" }}>
                    <div className="text-white text-sm relative" >
                        Publicar
                    </div>
                </div> */}
            </div>

        </div>
    )
}