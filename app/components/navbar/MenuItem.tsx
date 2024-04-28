'use client'


interface MenuItemProps {
    onClick: () => void;//empty function that returns empty void to open menu
    label: string;
}




const MenuItem:React.FC<MenuItemProps> = ({
    onClick,
    label
}) => {
    return (
        <div
            onClick={onClick}
            className="
                px-4
                py-3
                hover:bg-neutral-100
                transition
                font-semibold
                text-rose-800"
        >
            {label}
        </div>
    );
}

export default MenuItem;
<div></div>