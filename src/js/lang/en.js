sa11y.addI18n("en", {
// Language of Sa11y. Some global variables to help translate.
"JOOMLA_A11Y_CHECKER_LANG_CODE": "en",
"JOOMLA_A11Y_CHECKER_MAIN_TOGGLE_LABEL": "Check Accessibility",
"JOOMLA_A11Y_CHECKER_CONTAINER_LABEL": "Accessibility Checker",
"JOOMLA_A11Y_CHECKER_ERROR": "Error",
"JOOMLA_A11Y_CHECKER_WARNING": "Warning",
"JOOMLA_A11Y_CHECKER_GOOD": "Good",
"JOOMLA_A11Y_CHECKER_ON": "On",
"JOOMLA_A11Y_CHECKER_OFF": "Off",
"JOOMLA_A11Y_CHECKER_ALERT_TEXT": "Alert",
"JOOMLA_A11Y_CHECKER_ALERT_CLOSE": "Close",
"JOOMLA_A11Y_CHECKER_SHOW_OUTLINE": "Show Outline",
"JOOMLA_A11Y_CHECKER_HIDE_OUTLINE": "Hide Outline",
"JOOMLA_A11Y_CHECKER_SHOW_SETTINGS": "Show Settings",
"JOOMLA_A11Y_CHECKER_HIDE_SETTINGS": "Hide Settings",
"JOOMLA_A11Y_CHECKER_PAGE_OUTLINE": "Page Outline",
"JOOMLA_A11Y_CHECKER_SETTINGS": "Settings",
"JOOMLA_A11Y_CHECKER_CONTRAST": "Contrast",
"JOOMLA_A11Y_CHECKER_FORM_LABELS": "Form labels",
"JOOMLA_A11Y_CHECKER_LINKS_ADVANCED": "Links (Advanced)",
"JOOMLA_A11Y_CHECKER_DARK_MODE": "Dark Mode",
"JOOMLA_A11Y_CHECKER_SHORTCUT_SR": "Skip to issue. Keyboard shortcut: Alt period",
"JOOMLA_A11Y_CHECKER_SHORTCUT_TOOLTIP": "Skip to issue",

// Readability panel translations.
"JOOMLA_A11Y_CHECKER_READABILITY": "Readability",
"JOOMLA_A11Y_CHECKER_AVG_WORD_PER_SENTENCE": "Average words per sentence:",
"JOOMLA_A11Y_CHECKER_COMPLEX_WORDS": "Complex words:",
"JOOMLA_A11Y_CHECKER_TOTAL_WORDS": "Words:",
"JOOMLA_A11Y_CHECKER_VERY_DIFFICULT_READABILITY": "Very difficult",
"JOOMLA_A11Y_CHECKER_DIFFICULT_READABILITY": "Difficult",
"JOOMLA_A11Y_CHECKER_FAIRLY_DIFFICULT_READABILITY": "Fairly difficult",
"JOOMLA_A11Y_CHECKER_GOOD_READABILITY": "Good",

// Panel status
"JOOMLA_A11Y_CHECKER_PANEL_STATUS_1": "1 accessibility error and 1 warning found.",
"JOOMLA_A11Y_CHECKER_PANEL_STATUS_2": "1 accessibility error and %(warningCount) warnings found.",
"JOOMLA_A11Y_CHECKER_PANEL_STATUS_3": "%(errorCount) accessibility errors and 1 warning found.",
"JOOMLA_A11Y_CHECKER_PANEL_STATUS_4": "%(errorCount) accessibility errors and %(warningCount) warnings found.",
"JOOMLA_A11Y_CHECKER_PANEL_STATUS_5": "1 accessibility error found.",
"JOOMLA_A11Y_CHECKER_PANEL_STATUS_6": "%(errorCount) accessibility errors found.",
"JOOMLA_A11Y_CHECKER_PANEL_STATUS_7": "Please review warning.",
"JOOMLA_A11Y_CHECKER_PANEL_STATUS_8": "Please review %(warningCount) warnings.",
"JOOMLA_A11Y_CHECKER_PANEL_STATUS_9": "No accessibility errors found.",
"JOOMLA_A11Y_CHECKER_PANEL_STATUS_10": "%(warningCount) <span class=\"sa11y-visually-hidden\">warnings found.</span>",
"JOOMLA_A11Y_CHECKER_PANEL_STATUS_11": "%(totalCount) <span class=\"sa11y-visually-hidden\">total issues found.</span>",
// Can't find this one
"notVisibleAlert": "The item you are trying to view is not visible; it may be hidden or inside of an accordion or tab component. Here\'s a preview: ",

// Headings
"JOOMLA_A11Y_CHECKER_HEADING_NON_CONSECUTIVE_LEVEL": "Non-consecutive heading level used. Headings should never skip levels, or go from <span class=\"sa11y-bold\">Heading %(prevLevel)</span> to <span class=\"sa11y-red-text sa11y-bold\">Heading %(level)</span>.",
"JOOMLA_A11Y_CHECKER_HEADING_EMPTY": "Empty heading found! To fix, delete this line or change its format from <span class=\"sa11y-red-text sa11y-bold\">Heading $(level)</span> to <span class=\"sa11y-bold\">Normal</span> or <span class=\"sa11y-bold\">Paragraph</span>.",
"JOOMLA_A11Y_CHECKER_HEADING_LONG": "Heading is long! Headings should be used to organize content and convey structure. They should be brief, informative, and unique. Please keep headings less than 160 characters (no more than a sentence).",
"JOOMLA_A11Y_CHECKER_HEADING_LONG_INFO": "Character Count: <span class=\"sa11y-bold sa11y-red-text\">%(headingLength)</span>.",
"JOOMLA_A11Y_CHECKER_HEADING_FIRST": "The first heading on a page should usually be a Heading 1 or Heading 2. Heading 1 should be the start of the main content section, and is the main heading that describes the overall purpose of the page. Learn more about <a href=\"https://www.w3.org/WAI/tutorials/page-structure/headings/\" target=\"_blank\">Heading Structure. %(sa11yNewTab)</a>",
"JOOMLA_A11Y_CHECKER_HEADING_MISSING_ONE": "Missing Heading 1. Heading 1 should be the start of the main content area, and is the main heading that describes the overall purpose of the page. Learn more about <a href=\"https://www.w3.org/WAI/tutorials/page-structure/headings/\" target=\"_blank\">Heading Structure. %(sa11yNewTab)</a>",
"JOOMLA_A11Y_CHECKER_HEADING_EMPTY_WITH_IMAGE": "Heading has no text, but contains an image. If this is not a heading, change its format from <span class=\"sa11y-red-text sa11y-bold\">Heading %(level)</span> to <span class=\"sa11y-bold\">Normal</span> or <span class=\"sa11y-bold\">Paragraph</span>. Otherwise, please add alt text to the image if it is not decorative.",
"JOOMLA_A11Y_CHECKER_PANEL_HEADING_MISSING_ONE": "Missing Heading 1!",

// Link Text
"JOOMLA_A11Y_CHECKER_LINK_EMPTY": "Remove empty links without any text.",

"JOOMLA_A11Y_CHECKER_LINK_EMPTY_LINK_NO_LABEL": "Link does not have discernable text that is visible to screen readers and other assistive technology. To fix:<ul><li>Add some concise text that describes where the link takes you.</li><li>If it is an <a href=\"https://a11y-101.com/development/icons-and-links\" target=\"_blank\">icon link or SVG,%(sa11yNewTab)</a> it is likely missing a descriptive label.</li><li>If you think this link is an error due to a copy/paste bug, consider deleting it.</li></ul>",

"JOOMLA_A11Y_CHECKER_LINK_LABEL": "The descriptive label for this link is: <span class=\"sa11y-bold\">%(linkText)</span>",

"JOOMLA_A11Y_CHECKER_LINK_STOPWORD": "Link text may not be descriptive enough out of context: <span class=\"sa11y-red-text sa11y-bold\">%(error)</span>",
"JOOMLA_A11Y_CHECKER_LINK_STOPWORD_TIP": "<span class=\"sa11y-bold\">Tip!</span> Link text should always be clear, unique, and meaningful. Avoid common words like &quot;click here&quot; or &quot;learn more&quot;.",

"JOOMLA_A11Y_CHECKER_LINK_BEST_PRACTICES": "Consider replacing the link text: <span class=\"sa11y-red-text sa11y-bold\">%(error)</span>",
"JOOMLA_A11Y_CHECKER_LINK_BEST_PRACTICES_DETAILS": "<ul><li>&quot;Click here&quot; places focus on mouse mechanics, when many people do not use a mouse or may be viewing this website on a mobile device. Consider using a different verb that relates to the task.</li><li>Avoid using HTML symbols as call to actions unless they are hidden to assistive technologies.</li></ul>",

"JOOMLA_A11Y_CHECKER_LINK_URL": "Longer, less intelligible URLs used as link text might be difficult to listen to with assistive technology. In most cases, it is better to use human-readable text instead of the URL. Short URLs (such as a site's homepage) are okay.",
"JOOMLA_A11Y_CHECKER_LINK_URL_TIP": "<span class=\"sa11y-bold\">Tip!</span> Link text should always be clear, unique, and meaningful so it could be understood out of context.",

// Links Advanced
"JOOMLA_A11Y_CHECKER_NEW_TAB_WARNING": "Link opens in a new tab or window without warning. Doing so can be disorienting, especially for people who have difficulty perceiving visual content. Secondly, it is not always a good practice to control someone's experience or make decisions for them. Indicate that the link opens in a new window within the link text.",
"JOOMLA_A11Y_CHECKER_NEW_TAB_WARNING_TIP": "<span class=\"sa11y-bold\">Tip!</span> Learn best practices: <a href=\"https://www.nngroup.com/articles/new-browser-windows-and-tabs/\">opening links in new browser windows and tabs.</a>!",
"JOOMLA_A11Y_CHECKER_FILE_TYPE_WARNING": "Link points to a PDF or downloadable file (e.g. MP3, Zip, Word Doc) without warning. Indicate the file type within the link text. If it is a large file, consider including the file size.",
"JOOMLA_A11Y_CHECKER_FILE_TYPE_WARNING_TIP": "<span class=\"sa11y-bold\">Example:</span> Executive Report (PDF, 3MB)",
"JOOMLA_A11Y_CHECKER_LINK_IDENTICAL_NAME": "Link has identical text as another link, although it points to a different page. Multiple links with the same text may cause confusion for people who use screen readers.",
"JOOMLA_A11Y_CHECKER_LINK_IDENTICAL_NAME_TIP": "Consider making the following link more descriptive to help distinguish it from other links: <span class=\"sa11y-red-text sa11y-bold\">%(linkText)</span>",

// Images
"JOOMLA_A11Y_CHECKER_MISSING_ALT_LINK_BUT_HAS_TEXT_MESSAGE": "Image is being used as a link with surrounding text, although the alt attribute should be marked as decorative or null.",
"JOOMLA_A11Y_CHECKER_MISSING_ALT_LINK_MESSAGE": "Image is being used as a link but is missing alt text! Please ensure alt text describes where the link takes you.",
"JOOMLA_A11Y_CHECKER_MISSING_ALT_MESSAGE": "Missing alt text! If the image conveys a story, mood, or important information - be sure to describe the image.",
"JOOMLA_A11Y_CHECKER_LINK_IMAGE_BAD_ALT_MESSAGE": "File extension within the alt text found. Ensure the alt text describes the destination of the link, not a literal description of the image. Remove: <span class='sa11y-red-text sa11y-bold'>%(error)</span>.",
"JOOMLA_A11Y_CHECKER_LINK_IMAGE_BAD_ALT_MESSAGE_INFO": "The alt text for this image is: <span class=\"sa11y-bold\">%(altText)</span>",
"JOOMLA_A11Y_CHECKER_LINK_IMAGE_PLACEHOLDER_ALT_MESSAGE": "Non-descript or placeholder alt text within a linked image found. Ensure the alt text describes the destination of the link, not a literal description of the image. Replace the following alt text: <span class=\"sa11y-bold sa11y-red-text\">%(altText)</span>.",

"JOOMLA_A11Y_CHECKER_LINK_IMAGE_SUS_ALT_MESSAGE": "Assistive technologies already indicate that this is an image, so &quot;<span class=\"sa11y-red-text sa11y-bold\">%(error)</span>&quot; or &quot;%(error) of&quot; may be redundant. Ensure the alt text describes the destination of the link, not a literal description of the image.",
"JOOMLA_A11Y_CHECKER_LINK_IMAGE_SUS_ALT_MESSAGE_INFO": "The alt text for this image is: <span class=\"sa11y-bold\">%(altText)</span>.",

altHasBadWordMessage: (altText, error) => `File extension within the alt text found. If the image conveys a story, mood, or important information - be sure to describe the image.
Remove: <span class='sa11y-red-text sa11y-bold'>${error}</span>.
${sa11yHr}
The alt text for this image is: <span class='sa11y-bold'>${altText}</span>`,

altPlaceholderMessage: (altText) => `Non-descript or placeholder alt text found. Replace the following alt text with something more meaningful: <span class='sa11y-bold sa11y-red-text'>${altText}</span>.`,



altHasSusWordMessage: (altText, error) => `Assistive technologies already indicate that this is an image, so &quot;<span class='sa11y-red-text sa11y-bold'>${error}</span>&quot; or &quot;${error} of&quot; may be redundant.
${sa11yHr}
The alt text for this image is: <span class='sa11y-bold'>${altText}</span>`,

imageLinkNullAltNoTextMessage:
'Image within link is marked as decorative and there is no link text. Please add alt text to the image that describes the destination of the link.',

linkHasAltMessage:
'Image is marked as decorative, although the link is using the surrounding text as a descriptive label.',

decorativeMessage:
'Image is marked as <span class=\'sa11y-bold\'>decorative</span> and will be ignored by assistive technology. If the image conveys a story, mood or important information - be sure to add alt text.',

hyperlinkedImageAriaHidden:
'Link around image has <span class=\'sa11y-kbd\'>aria-hidden=&quot;true&quot;</span> but is still keyboard focusable. If you are intending to hide a redundant or duplicate link, add <span class=\'sa11y-kbd\'>tabindex=&quot;-1&quot;</span> as well.',

hyperlinkAltLengthMessage: (altText, altLength) => `Alt text description on a linked image is <span class='sa11y-bold'>too long</span>.
The alt text on linked images should describe where the link takes you, not a literal description of the image.
<span class='sa11y-bold'>Consider using the title of the page it links to as the alt text.</span>
${sa11yHr}
The alt text is <span class='sa11y-red-text sa11y-bold'>${altLength}</span> characters:
<span class='sa11y-red-text sa11y-bold'>${altText}</span>`,

imageLinkAltTextMessage: (altText) => `Image link contains alt text, although please ensure alt text describes the destination page.
<span class='sa11y-bold'>Consider using the title of the page it links to as the alt text.</span>
Does the alt text describe where the link takes you?
${sa11yHr}
Alt text: <span class='sa11y-bold'>${altText}</span>`,

anchorLinkAndAltMessage: (altText) => `Image link contains <span class='sa11y-bold'>both alt text and surrounding link text.</span> If this image is decorative and is being used as a functional link to another page, consider marking the image as decorative or null - the surrounding link text should suffice.
${sa11yHr}
Alt text: <span class='sa11y-bold'>${altText}</span>`,

altTooLongMessage: (altText, altLength) => `Alt text description is <span class='sa11y-bold'>too long</span>. Alt text should be concise, yet meaningful like a <em>tweet</em> (around 100 characters).
If this is a complex image or a graph, consider putting the long description of the image in the text below or an accordion component.
${sa11yHr}
The alt text is <span class='sa11y-red-text sa11y-bold'>${altLength}</span> characters:
<span class='sa11y-red-text sa11y-bold'>${altText}</span>`,

passAlt: (altText) => `The alt text for this image is: <span class='sa11y-bold'>${altText}</span>`,


});
