import React from 'react';

const CustomIcon = (props) => {
    const name = "fa fa-" + props.name + " fa-2x";
    return (
        <a href={props.link}>
            <i className={name} style = {{marginRight: 25}}></i>
        </a>);
}

export const SocialMedia = () => {
    return (
        <React.Fragment>
            <CustomIcon name = "instagram" link = "https://www.instagram.com/poshenloh"></CustomIcon>
            <CustomIcon name = "twitter" link = "https://twitter.com/PoShenLoh"></CustomIcon>
            <CustomIcon name = "facebook" link = "https://www.facebook.com/poshenloh"></CustomIcon>
            <CustomIcon name = "linkedin" link = "https://www.linkedin.com/in/poshenloh"></CustomIcon>
            <CustomIcon name = "youtube" link = "https://www.youtube.com/watch?v=YqFqBTdsRYE&list=PLqv4sKOD1bsUoSs-SbzlA2BE1tML4A33u"></CustomIcon>
        </React.Fragment>
    );
};
