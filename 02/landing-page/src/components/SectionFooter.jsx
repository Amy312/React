

export const SectionFooter = (props) => {
    const { social } = props;
    return(
        <li>
                <a href={`https://www.${social}.com`} target="_blank" className="footer-icon">
                    <i className={`fab fa-${social}`}> </i>
                            </a>
                        </li>
    );
}
