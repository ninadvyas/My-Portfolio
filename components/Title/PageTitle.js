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
                className={`min-[320px]:text-4xl max-[600px]: text-4xl lg:text-5xl font-extrabold 
                }`}
            >
                {children}
            </h1>
        </SectionContainer>
    );
};
