import clsx from "clsx"

function IconTopCard({size, children}) {
    return(
      <div className={
        clsx(
          "bg-whiteP-100 rounded-full text-primary flex justify-center items-center" ,{
            "w-20 h-20 text-5xl": size === "sm",
            "w-28 h-28 text-6xl": size === "md",
          }
        )
      }>
        {children}
      </div>
    )
}

export default IconTopCard