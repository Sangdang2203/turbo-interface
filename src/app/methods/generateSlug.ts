export default function generateSlug(title: string) {
  if (typeof title !== "string") {
    return ""; // Handle non-string input
  }

  // Convert to lowercase and remove accents
  const normalizedTitle = title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  // Replace Vietnamese characters with diacritics
  const slugWithDiacriticsFixed = normalizedTitle
    .replace(/á|à|ả|ạ|ã|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ/gi, "a")
    .replace(/é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ/gi, "e")
    .replace(/i|í|ì|ỉ|ĩ|ị/gi, "i")
    .replace(/ó|ò|ỏ|õ|ọ|ô|ố|ồ|ổ|ỗ|ộ|ơ|ớ|ờ|ở|ỡ|ợ/gi, "o")
    .replace(/ú|ù|ủ|ũ|ụ|ư|ứ|ừ|ử|ữ|ự/gi, "u")
    .replace(/ý|ỳ|ỷ|ỹ|ỵ/gi, "y")
    .replace(/đ/gi, "d");

  // Replace special characters
  const slugWithSpecialCharsRemoved = slugWithDiacriticsFixed.replace(
    /[\`|\~|\!|\@|\#|\||\$|\%|\^|\&|\*|\(|\)|\+|\=|\,|\.|\/|\?|\>|\<|\'|\"|\:|\;|_|\[|\]|\}|\{|\/|\\|\/|\|]/gi,
    ""
  );

  // Convert spaces to hyphens
  const slugWithHyphens = slugWithSpecialCharsRemoved.replace(/ /gi, "-");

  // Remove multiple consecutive hyphens
  let slug = slugWithHyphens.replace(/\-\-\-\-\-/gi, "-");
  slug = slug.replace(/\-\-\-\-/gi, "-");
  slug = slug.replace(/\-\-\-/gi, "-");
  slug = slug.replace(/\-\-/gi, "-");

  // Trim leading and trailing hyphens
  return slug.trim();
}
