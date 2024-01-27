import Link from 'next/link';

interface MenuItemProps {
  text: string;
  icon: any;
  url?: string;
  className?: string;
  onClick?: (event: any) => void;
}

export default function MenuItem(props: MenuItemProps) {
  function renderLink() {
    return (
      <div>
        <div
          className={`flex flex-col justify-center items-center h-5 w-5 dark:text-gray-200 ${props.className}`}
        >
          {props.icon}
        </div>
        <span
          className={`
        text-xs font-light dark:text-gray-200 ${props.className}
        `}
        >
          {props.text}
        </span>
      </div>
    );
  }
  return (
    <li
      onClick={props.onClick}
      className={`cursor-pointer flex justify-center hover:bg-gray-100 dark:hover:bg-gray-800`}
    >
      {props.url ? (
        <Link href={props.url} passHref>
          {renderLink()}
        </Link>
      ) : (
        renderLink()
      )}
    </li>
  );
}
