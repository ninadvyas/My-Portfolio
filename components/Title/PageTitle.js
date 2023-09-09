import { SectionContainer } from "@components/Section";

export const PageTitle = ({
    children,
    className = "",
    headingClassName = ""
}) => {
    return (
        <SectionContainer
            className={`page-title--content max-w-[54rem] ${
                className && className
            }`}
        >
            <h1
                className={` text-3xl lg:text-3xl font-medium 
                }`}
            >
                {children}
            </h1>
        </SectionContainer>
    );
};
