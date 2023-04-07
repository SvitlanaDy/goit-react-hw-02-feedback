import PropTypes from 'prop-types';

const Section = ({ title, children }) => {
    return (
        <Section>
            <h1>{ title } {children} </h1>
            
        </Section>
    )
}

export default Section;
Section.propTypes = {
        title: PropTypes.string.isRequired,
        children: PropTypes.node.isRequired,
      
  };
