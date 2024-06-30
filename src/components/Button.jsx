
const Button = ({ label, iconUrl, backgroundColor, borderColor, textColor,fullWidth }) => {
  return (
    <button className={`mt-6 flex justify-center items-center border gap-2 px-7 py-4 

      ${backgroundColor
         ? `${backgroundColor} ${textColor} ${borderColor}` :
        'bg-coral-red text-white border-coral-red'
      }

     font-montserrat text-lg leading-none rounded-full ${fullWidth && "w-full"} `}>
      {label}

      {iconUrl ? <img src={iconUrl} alt="arrow-right-icon" className="ml-2 rounded-full w-5 h-5" /> : ""}

    </button>

  )
}

export default Button