/**
 * Menghapus semua simbol markdown dari teks AI
 * sehingga output bersih dan siap cetak.
 */
export const cleanMarkdown = (text: string): string =>
  text
    .replace(/\*\*(.*?)\*\*/g, "$1")   // bold
    .replace(/\*(.*?)\*/g, "$1")       // italic
    .replace(/^#{1,6}\s+/gm, "")      // headings
    .replace(/`{1,3}[a-z]*\n?/g, "")  // code fences
    .replace(/^>\s/gm, "")            // blockquotes
    .replace(/_{1,2}(.*?)_{1,2}/g, "$1") // underline/italic
    .replace(/~~(.*?)~~/g, "$1");     // strikethrough
