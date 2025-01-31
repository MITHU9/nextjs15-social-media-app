import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { formatDate, formatDistanceToNowStrict } from "date-fns";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatRelativeDate(from: Date) {
  const currentDate = new Date();

  const diff = currentDate.getTime() - from.getTime();

  if (diff < 24 * 60 * 60 * 1000) {
    return formatDistanceToNowStrict(from, { addSuffix: true });
  } else {
    if (from.getFullYear() === currentDate.getFullYear()) {
      return formatDate(from, "MMM d");
    } else {
      return formatDate(from, "MMM d, yyy");
    }
  }
}
