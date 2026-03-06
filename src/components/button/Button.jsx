

const Button = ({children,variant,onClick,ishoverAnimation }) => {
  return (
    <div>
        <button className= {`btn btn-${variant} ${ishoverAnimation?"custom-btn": ""}  `} onClick={onClick}>
            {children}
        </button>

    </div>
  )
}

export default Button
