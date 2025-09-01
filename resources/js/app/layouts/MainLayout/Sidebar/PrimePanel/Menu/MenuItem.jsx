// Import Dependencies
import PropTypes from "prop-types";
import { Link, usePage } from "@inertiajs/react";
import clsx from "clsx";
import { useTranslation } from "react-i18next";

// Local Imports
import { useBreakpointsContext } from "@/app/contexts/breakpoint/context";
import { useSidebarContext } from "@/app/contexts/sidebar/context";
import { Badge } from "@/components/ui";

// ----------------------------------------------------------------------

export function MenuItem({ data }) {
  const { path, transKey, id } = data;
  const { t } = useTranslation();
  const { lgAndDown } = useBreakpointsContext();
  const { close } = useSidebarContext();
  const { url } = usePage();
  const title = t(transKey) || data.title;

  // For now, we'll remove the info functionality that relied on useRouteLoaderData
  // This would need to be replaced with props or context in Inertia.js
  const info = null;

  const handleMenuItemClick = () => lgAndDown && close();
  
  const isActive = url === path || url.startsWith(path);

  return (
    <Link
      href={path}
      onClick={handleMenuItemClick}
      className={clsx(
        "outline-hidden transition-colors duration-300 ease-in-out",
        isActive
          ? "font-medium text-primary-600 dark:text-primary-400"
          : "text-gray-600 hover:text-gray-900 dark:text-dark-200 dark:hover:text-dark-50",
      )}
    >
      <div
        data-menu-active={isActive}
        style={{ height: "34px" }}
        className="flex items-center justify-between text-xs-plus tracking-wide"
      >
        <span className="mr-1 truncate"> {title}</span>
        {info && info.val && (
          <Badge
              color={info.color}
            variant="soft"
            className="h-4.5 min-w-[1rem] shrink-0 p-[5px] text-tiny-plus"
          >
            {info.val}
          </Badge>
        )}
      </div>
    </Link>
  );
}

MenuItem.propTypes = {
  data: PropTypes.object,
};
