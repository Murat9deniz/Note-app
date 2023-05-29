import "./background.css"

const Background = ({ children, bgColor }) => {
    
  return <div className="box" style={{
    backgroundColor: bgColor ||  "black" 
  }}>
    {children}
  </div>;
};

export default Background;
