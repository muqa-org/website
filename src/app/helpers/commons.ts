/**
 * Generates a URL-friendly slug from a given title string.
 *
 * This function:
 * - Converts the title to lowercase
 * - Trims any leading and trailing whitespace
 * - Removes non-alphanumeric characters except spaces and hyphens
 * - Replaces spaces with hyphens
 * - Replaces multiple consecutive hyphens with a single hyphen
 *
 * @param {string} title - The title to convert into a slug.
 * @returns {string} - The generated slug.
 */
export function generateSlug(title: string): string {
	return title
		.toLowerCase() // Convert to lowercase
		.trim() // Trim whitespace from both ends
		.replace(/[^\w\s-]/g, '') // Remove non-word characters except spaces and hyphens
		.replace(/\s+/g, '-') // Replace spaces with hyphens
		.replace(/-+/g, '-'); // Replace multiple hyphens with a single hyphen
}
