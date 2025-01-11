import { getHexAlpha } from './utils.js';

const toolbar = (palette) => {
  return {
    'toolbar.activeBackground': `${palette.primary.white}${getHexAlpha(3)}`,
    'toolbar.hoverBackground': `${palette.primary.white}${getHexAlpha(5)}`,
    'toolbar.hoverOutline': `${palette.primary.white}${getHexAlpha(10)}`,
  };
};

const actionBar = (palette) => {
  return {
    'actionBar.toggledBackground': `${palette.primary.white}${getHexAlpha(5)}`,
  };
};

const activityBar = (palette) => {
  return {
    'activityBar.background': palette.dark.grey1,
    'activityBar.dropBorder': palette.primary.pink,
    'activityBar.foreground': `${palette.primary.white}${getHexAlpha(80)}`,
    'activityBar.inactiveForeground': `${palette.primary.white}${getHexAlpha(55)}`,
    'activityBar.border': `${palette.primary.white}${getHexAlpha(10)}`,
    'activityBarBadge.background': palette.primary.pink,
    'activityBarBadge.foreground': palette.primary.black,
    'activityBar.activeBorder': palette.primary.pink,
    'activityBar.activeBackground': `${palette.primary.white}${getHexAlpha(5)}`,
    'activityBar.activeFocusBorder': palette.primary.white,
  };
};

const badge = (palette) => {
  return {
    'badge.background': palette.primary.pink,
    'badge.foreground': palette.primary.black,
  };
};

const banner = (palette) => {
  return {
    'banner.background': palette.primary.pink,
    'banner.foreground': palette.primary.black,
    'banner.iconForeground': palette.primary.black,
  };
};

const core = (palette) => {
  return {
    focusBorder: `#757575${getHexAlpha(40)}`,
    foreground: `${palette.primary.white}${getHexAlpha(80)}`,
    disabledForeground: `${palette.primary.white}${getHexAlpha(35)}`,
    'widget.border': `${palette.primary.black}${getHexAlpha(20)}`,
    'widget.shadow': `${palette.primary.black}${getHexAlpha(25)}`,
    'selection.background': `${palette.primary.white}${getHexAlpha(10)}`,
    descriptionForeground: `${palette.primary.white}${getHexAlpha(55)}`,
    errorForeground: palette.primary.red,
    'icon.foreground': `${palette.primary.white}${getHexAlpha(80)}`,
    'sash.hoverBorder': `#757575${getHexAlpha(40)}`,
  };
};

const breadcrumb = (palette) => {
  return {
    'breadcrumb.foreground': `${palette.primary.white}${getHexAlpha(55)}`,
    'breadcrumb.background': palette.dark.grey1,
    'breadcrumb.focusForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'breadcrumb.activeSelectionForeground': palette.primary.pink,
    'breadcrumbPicker.background': palette.dark.grey4,
  };
};

const button = (palette) => {
  return {
    'button.background': palette.primary.pink,
    'button.foreground': palette.primary.black,
    'button.border': `${palette.primary.white}${getHexAlpha(10)}`,
    'button.separator': palette.primary.black,
    'button.hoverBackground': '#CB8569e6',
    'button.secondaryForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'button.secondaryBackground': `${palette.primary.white}${getHexAlpha(5)}`,
    'button.secondaryHoverBackground': `${palette.primary.white}${getHexAlpha(10)}`,
  };
};

const checkbox = (palette) => {
  return {
    'checkbox.background': `${palette.primary.white}${getHexAlpha(5)}`,
    'checkbox.foreground': `${palette.primary.white}${getHexAlpha(80)}`,
    'checkbox.border': `${palette.primary.white}${getHexAlpha(10)}`,
    'checkbox.selectBackground': `${palette.primary.white}${getHexAlpha(5)}`,
    'checkbox.selectBorder': `${palette.primary.white}${getHexAlpha(10)}`,
  };
};

const charts = (palette) => {
  return {
    'charts.foreground': palette.primary.black,
    'charts.lines': `${palette.primary.white}${getHexAlpha(10)}`,
    'charts.red': palette.primary.red,
    'charts.blue': palette.primary.blue,
    'charts.yellow': palette.primary.yellow,
    'charts.orange': palette.primary.orange,
    'charts.green': palette.primary.green,
    'charts.purple': palette.primary.purple,
  };
};

const chat = (palette) => {
  return {
    'chat.requestBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'chat.slashCommandBackground': `${palette.primary.white}${getHexAlpha(5)}`,
    'chat.slashCommandForeground': palette.primary.pink,
    'chat.avatarBackground': '#2a2a2a',
    'chat.avatarForeground': palette.primary.pink,
  };
};

const commandCenter = (palette) => {
  return {
    'commandCenter.foreground': `${palette.primary.white}${getHexAlpha(80)}`,
    'commandCenter.activeForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'commandCenter.background': `${palette.primary.white}${getHexAlpha(5)}`,
    'commandCenter.activeBackground': `${palette.primary.white}${getHexAlpha(10)}`,
    'commandCenter.border': `${palette.primary.white}${getHexAlpha(10)}`,
    'commandCenter.inactiveForeground': `${palette.primary.white}${getHexAlpha(55)}`,
    'commandCenter.inactiveBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'commandCenter.activeBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'commandCenter.debuggingBackground': palette.tertiary.yellow,
  };
};

const commentsView = (palette) => {
  return {
    'commentsView.resolvedIcon': `${palette.primary.white}${getHexAlpha(55)}`,
    'commentsView.unresolvedIcon': palette.primary.blue,
  };
};

const contrast = (palette) => {
  return {
    contrastActiveBorder: null,
    contrastBorder: null,
  };
};

const debug = (palette) => {
  return {
    'debugToolBar.background': palette.dark.grey4,
    'debugToolBar.border': `${palette.primary.black}${getHexAlpha(20)}`,
    'debugView.exceptionLabelForeground': palette.primary.black,
    'debugView.exceptionLabelBackground': palette.primary.red,
    'debugView.stateLabelForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'debugView.stateLabelBackground': `${palette.primary.white}${getHexAlpha(3)}`,
    'debugView.valueChangedHighlight': palette.secondary.blue,
    'debugTokenExpression.name': palette.primary.pink,
    'debugTokenExpression.value': palette.primary.mint,
    'debugTokenExpression.string': palette.primary.pink,
    'debugTokenExpression.boolean': palette.primary.blue,
    'debugTokenExpression.number': palette.secondary.green,
    'debugTokenExpression.error': palette.primary.red,
    'debugIcon.breakpointForeground': palette.primary.red,
    'debugIcon.breakpointDisabledForeground': `${palette.primary.white}${getHexAlpha(35)}`,
    'debugIcon.breakpointUnverifiedForeground': palette.primary.orange,
    'debugIcon.breakpointCurrentStackframeForeground': palette.primary.yellow,
    'debugIcon.breakpointStackframeForeground': `${palette.primary.yellow}${getHexAlpha(55)}`,
    'debugIcon.startForeground': palette.primary.green,
    'debugIcon.pauseForeground': palette.primary.yellow,
    'debugIcon.stopForeground': palette.primary.red,
    'debugIcon.disconnectForeground': palette.primary.red,
    'debugIcon.restartForeground': palette.primary.green,
    'debugIcon.stepOverForeground': palette.primary.blue,
    'debugIcon.stepIntoForeground': palette.primary.blue,
    'debugIcon.stepOutForeground': palette.primary.blue,
    'debugIcon.continueForeground': palette.primary.green,
    'debugIcon.stepBackForeground': palette.primary.blue,
    'debugConsole.infoForeground': palette.primary.blue,
    'debugConsole.warningForeground': palette.primary.orange,
    'debugConsole.errorForeground': palette.primary.red,
    'debugConsole.sourceForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'debugConsoleInputIcon.foreground': palette.primary.pink,
  };
};

const diffEditor = (palette) => {
  return {
    'diffEditor.insertedTextBackground': `${palette.primary.green}${getHexAlpha(80)}`,
    'diffEditor.insertedTextBorder': palette.transparent,
    'diffEditor.removedTextBackground': `${palette.primary.red}${getHexAlpha(35)}`,
    'diffEditor.removedTextBorder': palette.transparent,
    'diffEditor.border': `${palette.primary.white}${getHexAlpha(10)}`,
    'diffEditor.diagonalFill': `${palette.primary.white}${getHexAlpha(10)}`,
    'diffEditor.insertedLineBackground': `${palette.primary.green}${getHexAlpha(20)}`,
    'diffEditor.removedLineBackground': `${palette.primary.red}${getHexAlpha(20)}`,
    'diffEditorGutter.insertedLineBackground': palette.transparent,
    'diffEditorGutter.removedLineBackground': palette.transparent,
    'diffEditorOverview.insertedForeground': `${palette.primary.green}${getHexAlpha(80)}`,
    'diffEditorOverview.removedForeground': `${palette.primary.red}${getHexAlpha(80)}`,
    'diffEditor.unchangedRegionBackground': palette.dark.grey5,
    'diffEditor.unchangedRegionForeground': `${palette.primary.white}${getHexAlpha(55)}`,
    'diffEditor.unchangedRegionShadow': `${palette.primary.black}${getHexAlpha(25)}`,
    'diffEditor.unchangedCodeBackground': `${palette.primary.white}${getHexAlpha(5)}`,
    'diffEditor.move.border': `#757575${getHexAlpha(40)}`,
    'diffEditor.moveActive.border': palette.secondary.yellow,
    'multiDiffEditor.headerBackground': palette.alert,
  };
};

const dropdown = (palette) => {
  return {
    'dropdown.background': '#343434',
    'dropdown.listBackground': palette.dark.grey4,
    'dropdown.border': `${palette.primary.white}${getHexAlpha(10)}`,
    'dropdown.foreground': `${palette.primary.white}${getHexAlpha(80)}`,
  };
};

const editor = (palette) => {
  return {
    'editor.focusedStackFrameHighlightBackground': `${palette.primary.yellow}${getHexAlpha(20)}`,
    'editor.stackFrameHighlightBackground': `${palette.primary.yellow}${getHexAlpha(80)}`,
    'editor.inlineValuesForeground': palette.primary.yellow,
    'editor.inlineValuesBackground': `${palette.primary.yellow}${getHexAlpha(20)}`,
    'editor.background': palette.dark.grey3,
    'editor.foreground': palette.primary.grey,
    'editorLineNumber.foreground': `${palette.primary.white}${getHexAlpha(35)}`,
    'editorLineNumber.activeForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'editorLineNumber.dimmedForeground': `${palette.primary.white}${getHexAlpha(20)}`,
    'editorCursor.background': palette.primary.black,
    'editorCursor.foreground': palette.primary.pink,
    'editor.selectionBackground': `${palette.primary.white}${getHexAlpha(10)}`,
    'editor.selectionForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'editor.inactiveSelectionBackground': `${palette.primary.white}${getHexAlpha(5)}`,
    'editor.selectionHighlightBackground': `${palette.primary.white}${getHexAlpha(5)}`,
    'editor.selectionHighlightBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'editor.wordHighlightBackground': `${palette.primary.pink}${getHexAlpha(35)}`,
    'editor.wordHighlightBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'editor.wordHighlightStrongBackground': `${palette.primary.purple}${getHexAlpha(35)}`,
    'editor.wordHighlightStrongBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'editor.wordHighlightTextBackground': `${palette.primary.pink}${getHexAlpha(35)}`,
    'editor.wordHighlightTextBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'editor.findMatchBackground': `${palette.primary.mint}${getHexAlpha(35)}`,
    'editor.findMatchHighlightBackground': `${palette.primary.mint}${getHexAlpha(20)}`,
    'editor.findRangeHighlightBackground': `${palette.primary.white}${getHexAlpha(5)}`,
    'editor.findMatchBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'editor.findMatchHighlightBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'editor.findRangeHighlightBorder': palette.transparent,
    'search.resultsInfoForeground': `${palette.primary.white}${getHexAlpha(35)}`,
    'searchEditor.findMatchBackground': `${palette.primary.mint}${getHexAlpha(35)}`,
    'searchEditor.findMatchBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'searchEditor.textInputBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'editor.hoverHighlightBackground': `${palette.primary.white}${getHexAlpha(5)}`,
    'editor.lineHighlightBackground': palette.transparent,
    'editor.lineHighlightBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'editorUnicodeHighlight.border': palette.primary.yellow,
    'editorUnicodeHighlight.background': palette.transparent,
    'editorLink.activeForeground': palette.primary.pink,
    'editor.rangeHighlightBackground': `${palette.primary.white}${getHexAlpha(5)}`,
    'editor.rangeHighlightBorder': palette.transparent,
    'editor.symbolHighlightBackground': palette.transparent,
    'editor.symbolHighlightBorder': palette.primary.purple,
    'editorWhitespace.foreground': `${palette.primary.white}${getHexAlpha(20)}`,
    'editorIndentGuide.background1': `${palette.primary.yellow}${getHexAlpha(55)}`,
    'editorIndentGuide.background2': `${palette.primary.orange}${getHexAlpha(55)}`,
    'editorIndentGuide.background3': `${palette.primary.red}${getHexAlpha(55)}`,
    'editorIndentGuide.background4': `${palette.primary.purple}${getHexAlpha(55)}`,
    'editorIndentGuide.background5': `${palette.primary.blue}${getHexAlpha(55)}`,
    'editorIndentGuide.background6': `${palette.primary.green}${getHexAlpha(55)}`,
    'editorIndentGuide.activeBackground1': palette.secondary.yellow,
    'editorIndentGuide.activeBackground2': palette.secondary.orange,
    'editorIndentGuide.activeBackground3': palette.secondary.red,
    'editorIndentGuide.activeBackground4': palette.secondary.purple,
    'editorIndentGuide.activeBackground5': palette.secondary.blue,
    'editorIndentGuide.activeBackground6': palette.secondary.green,
    'editorInlayHint.background': `${palette.primary.white}${getHexAlpha(10)}`,
    'editorInlayHint.foreground': `${palette.primary.white}${getHexAlpha(55)}`,
    'editorInlayHint.typeForeground': palette.primary.mint,
    'editorInlayHint.typeBackground': palette.tertiary.mint,
    'editorInlayHint.parameterForeground': palette.secondary.orange,
    'editorInlayHint.parameterBackground': palette.tertiary.orange,
    'editorRuler.foreground': `${palette.primary.white}${getHexAlpha(10)}`,
    'editor.linkedEditingBackground': `${palette.primary.blue}${getHexAlpha(35)}`,
    'editorCodeLens.foreground': `${palette.primary.white}${getHexAlpha(35)}`,
    'editorLightBulb.foreground': palette.primary.yellow,
    'editorLightBulbAutoFix.foreground': palette.primary.green,
    'editorLightBulbAi.foreground': palette.primary.purple,
    'editorBracketMatch.background': `${palette.primary.brown}${getHexAlpha(35)}`,
    'editorBracketMatch.border': `${palette.primary.white}${getHexAlpha(10)}`,
    'editorBracketHighlight.foreground1': palette.secondary.yellow,
    'editorBracketHighlight.foreground2': palette.secondary.orange,
    'editorBracketHighlight.foreground3': palette.secondary.red,
    'editorBracketHighlight.foreground4': palette.secondary.purple,
    'editorBracketHighlight.foreground5': palette.secondary.blue,
    'editorBracketHighlight.foreground6': palette.secondary.green,
    'editorBracketHighlight.unexpectedBracket.foreground': palette.primary.red,
    'editorBracketPairGuide.activeBackground1': palette.secondary.yellow,
    'editorBracketPairGuide.activeBackground2': palette.secondary.orange,
    'editorBracketPairGuide.activeBackground3': palette.secondary.red,
    'editorBracketPairGuide.activeBackground4': palette.secondary.purple,
    'editorBracketPairGuide.activeBackground5': palette.secondary.blue,
    'editorBracketPairGuide.activeBackground6': palette.secondary.green,
    'editorBracketPairGuide.background1': `${palette.primary.yellow}${getHexAlpha(55)}`,
    'editorBracketPairGuide.background2': `${palette.primary.orange}${getHexAlpha(55)}`,
    'editorBracketPairGuide.background3': `${palette.primary.pink}${getHexAlpha(55)}`,
    'editorBracketPairGuide.background4': `${palette.primary.purple}${getHexAlpha(55)}`,
    'editorBracketPairGuide.background5': `${palette.primary.blue}${getHexAlpha(55)}`,
    'editorBracketPairGuide.background6': `${palette.primary.green}${getHexAlpha(55)}`,
    'editor.foldBackground': `${palette.primary.white}${getHexAlpha(5)}`,
    'editorOverviewRuler.background': palette.dark.grey1,
    'editorOverviewRuler.border': palette.transparent,
    'editorOverviewRuler.findMatchForeground': `${palette.primary.mint}${getHexAlpha(80)}`,
    'editorOverviewRuler.rangeHighlightForeground': `${palette.primary.white}${getHexAlpha(5)}`,
    'editorOverviewRuler.selectionHighlightForeground': `${palette.primary.white}${getHexAlpha(10)}`,
    'editorOverviewRuler.wordHighlightForeground': `${palette.primary.pink}${getHexAlpha(80)}`,
    'editorOverviewRuler.wordHighlightStrongForeground': `${palette.primary.purple}${getHexAlpha(80)}`,
    'editorOverviewRuler.wordHighlightTextForeground': `${palette.primary.pink}${getHexAlpha(80)}`,
    'editorOverviewRuler.modifiedForeground': `${palette.primary.blue}${getHexAlpha(80)}`,
    'editorOverviewRuler.addedForeground': `${palette.primary.green}${getHexAlpha(80)}`,
    'editorOverviewRuler.deletedForeground': `${palette.primary.red}${getHexAlpha(80)}`,
    'editorOverviewRuler.errorForeground': palette.primary.red,
    'editorOverviewRuler.warningForeground': palette.primary.orange,
    'editorOverviewRuler.infoForeground': palette.primary.blue,
    'editorOverviewRuler.bracketMatchForeground': `${palette.primary.brown}${getHexAlpha(80)}`,
    'editorError.foreground': palette.primary.red,
    'editorError.border': palette.transparent,
    'editorError.background': palette.transparent,
    'editorWarning.foreground': palette.primary.orange,
    'editorWarning.border': palette.transparent,
    'editorWarning.background': palette.transparent,
    'editorInfo.foreground': palette.primary.blue,
    'editorInfo.border': palette.transparent,
    'editorInfo.background': palette.transparent,
    'editorHint.foreground': palette.primary.mint,
    'editorHint.border': palette.transparent,
    'problemsErrorIcon.foreground': palette.primary.red,
    'problemsWarningIcon.foreground': palette.primary.orange,
    'problemsInfoIcon.foreground': palette.primary.blue,
    'editorUnnecessaryCode.border': palette.transparent,
    'editorUnnecessaryCode.opacity': `${palette.primary.white}${getHexAlpha(55)}`,
    'editorGutter.background': palette.dark.grey1,
    'editorGutter.modifiedBackground': palette.primary.blue,
    'editorGutter.addedBackground': palette.primary.green,
    'editorGutter.deletedBackground': palette.primary.red,
    'editorGutter.commentRangeForeground': palette.dark.grey5,
    'editorGutter.commentGlyphForeground': `${palette.primary.white}${getHexAlpha(55)}`,
    'editorGutter.commentUnresolvedGlyphForeground': palette.primary.blue,
    'editorGutter.foldingControlForeground': `${palette.primary.white}${getHexAlpha(55)}`,
    'editorCommentsWidget.resolvedBorder': `${palette.primary.white}${getHexAlpha(35)}`,
    'editorCommentsWidget.unresolvedBorder': palette.primary.blue,
    'editorCommentsWidget.rangeBackground': `${palette.primary.blue}${getHexAlpha(20)}`,
    'editorCommentsWidget.rangeActiveBackground': `${palette.primary.blue}${getHexAlpha(35)}`,
    'editorCommentsWidget.replyInputBackground': '#343434',
  };
};

const editorGroup = (palette) => {
  return {
    'editorGroup.border': `${palette.primary.white}${getHexAlpha(10)}`,
    'editorGroup.dropBackground': `${palette.primary.black}${getHexAlpha(30)}`,
    'editorGroupHeader.noTabsBackground': palette.dark.grey1,
    'editorGroupHeader.tabsBackground': palette.dark.grey1,
    'editorGroupHeader.tabsBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'editorGroupHeader.border': `${palette.primary.white}${getHexAlpha(10)}`,
    'editorGroup.emptyBackground': palette.dark.grey1,
    'editorGroup.focusedEmptyBorder': palette.transparent,
    'editorGroup.dropIntoPromptForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'editorGroup.dropIntoPromptBackground': palette.dark.grey4,
    'editorGroup.dropIntoPromptBorder': `${palette.primary.black}${getHexAlpha(20)}`,
    'tab.activeBackground': palette.dark.grey4,
    'tab.activeForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'tab.unfocusedActiveForeground': `${palette.primary.white}${getHexAlpha(55)}`,
    'tab.border': `${palette.primary.white}${getHexAlpha(10)}`,
    'tab.activeBorder': palette.transparent,
    'tab.unfocusedActiveBorder': palette.transparent,
    'tab.activeBorderTop': palette.transparent,
    'tab.unfocusedActiveBorderTop': palette.transparent,
    'tab.lastPinnedBorder': `#757575${getHexAlpha(40)}`,
    'tab.inactiveBackground': palette.dark.grey2,
    'tab.unfocusedActiveBackground': palette.dark.grey3,
    'tab.unfocusedInactiveBackground': palette.dark.grey1,
    'tab.inactiveForeground': `${palette.primary.white}${getHexAlpha(55)}`,
    'tab.unfocusedInactiveForeground': `${palette.primary.white}${getHexAlpha(35)}`,
    'tab.hoverBackground': palette.dark.grey4,
    'tab.unfocusedHoverBackground': palette.dark.grey3,
    'tab.hoverForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'tab.unfocusedHoverForeground': `${palette.primary.white}${getHexAlpha(55)}`,
    'tab.hoverBorder': palette.transparent,
    'tab.unfocusedHoverBorder': palette.transparent,
    'tab.activeModifiedBorder': palette.primary.blue,
    'tab.inactiveModifiedBorder': `${palette.primary.blue}${getHexAlpha(55)}`,
    'tab.unfocusedActiveModifiedBorder': `${palette.primary.blue}${getHexAlpha(55)}`,
    'tab.unfocusedInactiveModifiedBorder': `${palette.primary.blue}${getHexAlpha(35)}`,
    'editorPane.background': palette.dark.grey1,
    'sideBySideEditor.horizontalBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'sideBySideEditor.verticalBorder': `${palette.primary.white}${getHexAlpha(10)}`,
  };
};

const editorWidgets = (palette) => {
  return {
    'editorWidget.foreground': `${palette.primary.white}${getHexAlpha(80)}`,
    'editorWidget.background': palette.dark.grey4,
    'editorWidget.border': `${palette.primary.black}${getHexAlpha(20)}`,
    'editorWidget.resizeBorder': palette.primary.pink,
    'editorSuggestWidget.background': palette.dark.grey4,
    'editorSuggestWidget.border': `${palette.primary.black}${getHexAlpha(20)}`,
    'editorSuggestWidget.foreground': `${palette.primary.white}${getHexAlpha(55)}`,
    'editorSuggestWidget.focusHighlightForeground': palette.primary.pink,
    'editorSuggestWidget.highlightForeground': palette.primary.pink,
    'editorSuggestWidget.selectedBackground': `${palette.primary.white}${getHexAlpha(5)}`,
    'editorSuggestWidget.selectedForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'editorSuggestWidget.selectedIconForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'editorSuggestWidgetStatus.foreground': palette.primary.pink,
    'editorHoverWidget.foreground': `${palette.primary.white}${getHexAlpha(80)}`,
    'editorHoverWidget.background': palette.dark.grey4,
    'editorHoverWidget.border': `${palette.primary.black}${getHexAlpha(20)}`,
    'editorHoverWidget.highlightForeground': palette.primary.white,
    'editorHoverWidget.statusBarBackground': `${palette.primary.white}${getHexAlpha(3)}`,
    'editorGhostText.border': palette.transparent,
    'editorGhostText.background': palette.transparent,
    'editorGhostText.foreground': `${palette.primary.white}${getHexAlpha(20)}`,
    'editorStickyScroll.background': palette.dark.grey2,
    'editorStickyScrollHover.background': `${palette.primary.white}${getHexAlpha(5)}`,
    'debugExceptionWidget.background': palette.tertiary.red,
    'debugExceptionWidget.border': `${palette.primary.black}${getHexAlpha(20)}`,
    'editorMarkerNavigation.background': palette.dark.grey4,
    'editorMarkerNavigationError.background': palette.primary.red,
    'editorMarkerNavigationWarning.background': palette.primary.orange,
    'editorMarkerNavigationInfo.background': palette.primary.blue,
    'editorMarkerNavigationError.headerBackground': palette.tertiary.red,
    'editorMarkerNavigationWarning.headerBackground': palette.tertiary.orange,
    'editorMarkerNavigationInfo.headerBackground': palette.tertiary.blue,
  };
};

const extensions = (palette) => {
  return {
    'extensionButton.prominentForeground': palette.primary.black,
    'extensionButton.prominentBackground': palette.primary.pink,
    'extensionButton.prominentHoverBackground': palette.primary.pink,
    'extensionButton.background': palette.primary.pink,
    'extensionButton.foreground': palette.primary.black,
    'extensionButton.hoverBackground': palette.primary.pink,
    'extensionButton.separator': palette.primary.black,
    'extensionBadge.remoteBackground': palette.primary.mint,
    'extensionBadge.remoteForeground': palette.primary.black,
    'extensionIcon.starForeground': palette.primary.yellow,
    'extensionIcon.verifiedForeground': palette.primary.blue,
    'extensionIcon.preReleaseForeground': palette.primary.purple,
    'extensionIcon.sponsorForeground': palette.primary.red,
  };
};

const git = (palette) => {
  return {
    'gitDecoration.addedResourceForeground': palette.primary.green,
    'gitDecoration.modifiedResourceForeground': palette.secondary.blue,
    'gitDecoration.deletedResourceForeground': palette.secondary.red,
    'gitDecoration.renamedResourceForeground': palette.primary.yellow,
    'gitDecoration.stageModifiedResourceForeground': palette.primary.blue,
    'gitDecoration.stageDeletedResourceForeground': palette.primary.red,
    'gitDecoration.untrackedResourceForeground': palette.secondary.green,
    'gitDecoration.ignoredResourceForeground': `${palette.primary.white}${getHexAlpha(35)}`,
    'gitDecoration.conflictingResourceForeground': palette.primary.orange,
    'gitDecoration.submoduleResourceForeground': palette.primary.mint,
  };
};

const input = (palette) => {
  return {
    'input.background': '#343434',
    'input.border': `${palette.primary.white}${getHexAlpha(10)}`,
    'input.foreground': `${palette.primary.white}${getHexAlpha(80)}`,
    'input.placeholderForeground': `${palette.primary.white}${getHexAlpha(55)}`,
    'inputOption.activeBackground': palette.primary.pink,
    'inputOption.activeBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'inputOption.activeForeground': palette.primary.black,
    'inputOption.hoverBackground': `${palette.primary.white}${getHexAlpha(5)}`,
    'inputValidation.errorBackground': palette.tertiary.red,
    'inputValidation.errorForeground': palette.secondary.red,
    'inputValidation.errorBorder': `${palette.primary.red}${getHexAlpha(35)}`,
    'inputValidation.infoBackground': palette.tertiary.blue,
    'inputValidation.infoForeground': palette.secondary.blue,
    'inputValidation.infoBorder': `${palette.primary.blue}${getHexAlpha(35)}`,
    'inputValidation.warningBackground': palette.tertiary.orange,
    'inputValidation.warningForeground': palette.secondary.orange,
    'inputValidation.warningBorder': `${palette.primary.orange}${getHexAlpha(35)}`,
  };
};

const terminal = (palette) => {
  return {
    'terminal.background': palette.selection.foreground,
    'terminal.border': `${palette.primary.white}${getHexAlpha(10)}`,
    'terminal.foreground': palette.secondary.white,
    'terminal.ansiBlack': palette.primary.black,
    'terminal.ansiBlue': palette.primary.blue,
    'terminal.ansiBrightBlack': palette.primary.black,
    'terminal.ansiBrightBlue': palette.secondary.blue,
    'terminal.ansiBrightCyan': palette.secondary.mint,
    'terminal.ansiBrightGreen': palette.secondary.green,
    'terminal.ansiBrightMagenta': palette.secondary.pink,
    'terminal.ansiBrightRed': palette.secondary.red,
    'terminal.ansiBrightWhite': palette.secondary.white,
    'terminal.ansiBrightYellow': palette.secondary.yellow,
    'terminal.ansiCyan': palette.primary.mint,
    'terminal.ansiGreen': palette.primary.green,
    'terminal.ansiMagenta': palette.primary.pink,
    'terminal.ansiRed': palette.primary.red,
    'terminal.ansiWhite': palette.primary.white,
    'terminal.ansiYellow': palette.primary.yellow,
    'terminal.selectionBackground': palette.selection.background,
    'terminal.selectionForeground': palette.selection.foreground,
    'terminal.inactiveSelectionBackground': `${palette.primary.white}${getHexAlpha(5)}`,
    'terminal.findMatchBackground': `${palette.primary.mint}${getHexAlpha(35)}`,
    'terminal.findMatchBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'terminal.findMatchHighlightBackground': `${palette.primary.mint}${getHexAlpha(20)}`,
    'terminal.findMatchHighlightBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'terminal.hoverHighlightBackground': `${palette.primary.white}${getHexAlpha(5)}`,
    'terminalCursor.background': palette.primary.black,
    'terminalCursor.foreground': palette.primary.pink,
    'terminal.dropBackground': `${palette.primary.black}${getHexAlpha(30)}`,
    'terminal.tab.activeBorder': palette.primary.pink,
    'terminalCommandDecoration.defaultBackground': palette.primary.blue,
    'terminalCommandDecoration.successBackground': palette.primary.green,
    'terminalCommandDecoration.errorBackground': palette.primary.red,
    'terminalOverviewRuler.cursorForeground': palette.primary.pink,
    'terminalOverviewRuler.findMatchForeground': `${palette.primary.mint}${getHexAlpha(80)}`,
    'terminalStickyScroll.background': palette.dark.grey2,
    'terminalStickyScrollHover.background': `${palette.primary.white}${getHexAlpha(10)}`,
  };
};

const inlineChat = (palette) => {
  return {
    'inlineChat.background': palette.dark.grey4,
    'inlineChat.border': `${palette.primary.black}${getHexAlpha(20)}`,
    'inlineChat.shadow': `${palette.primary.black}${getHexAlpha(25)}`,
    'inlineChat.regionHighlight': `${palette.primary.white}${getHexAlpha(5)}`,
    'inlineChatInput.border': `${palette.primary.white}${getHexAlpha(10)}`,
    'inlineChatInput.focusBorder': `#757575${getHexAlpha(40)}`,
    'inlineChatInput.placeholderForeground': `${palette.primary.white}${getHexAlpha(35)}`,
    'inlineChatInput.background': '#343434',
    'inlineChatDiff.inserted': `${palette.primary.green}${getHexAlpha(20)}`,
    'inlineChatDiff.removed': `${palette.primary.red}${getHexAlpha(20)}`,
    'interactive.activeCodeBorder': palette.alert,
    'interactive.inactiveCodeBorder': palette.alert,
  };
};

const keyBinding = (palette) => {
  return {
    'keybindingLabel.background': `${palette.primary.white}${getHexAlpha(5)}`,
    'keybindingLabel.foreground': `${palette.primary.white}${getHexAlpha(80)}`,
    'keybindingLabel.border': `${palette.primary.white}${getHexAlpha(10)}`,
    'keybindingLabel.bottomBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'keybindingTable.headerBackground': palette.dark.grey4,
    'keybindingTable.rowsBackground': palette.dark.grey4,
  };
};

const listsAndTrees = (palette) => {
  return {
    'list.activeSelectionBackground': `${palette.primary.white}${getHexAlpha(5)}`,
    'list.activeSelectionForeground': palette.primary.pink,
    'list.activeSelectionIconForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'list.deemphasizedForeground': `${palette.primary.white}${getHexAlpha(35)}`,
    'list.dropBackground': `${palette.primary.black}${getHexAlpha(30)}`,
    'list.focusBackground': `${palette.primary.white}${getHexAlpha(5)}`,
    'list.focusForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'list.focusHighlightForeground': palette.primary.pink,
    'list.focusOutline': `${palette.primary.white}${getHexAlpha(10)}`,
    'list.focusAndSelectionOutline': `#757575${getHexAlpha(40)}`,
    'list.highlightForeground': palette.primary.pink,
    'list.hoverBackground': `${palette.primary.white}${getHexAlpha(3)}`,
    'list.hoverForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'list.inactiveSelectionBackground': `${palette.primary.white}${getHexAlpha(5)}`,
    'list.inactiveSelectionForeground': palette.primary.pink,
    'list.inactiveSelectionIconForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'list.inactiveFocusBackground': palette.transparent,
    'list.inactiveFocusOutline': `${palette.primary.black}${getHexAlpha(10)}`,
    'list.errorForeground': palette.primary.red,
    'list.warningForeground': palette.primary.orange,
    'list.invalidItemForeground': palette.primary.red,
    'list.filterMatchBackground': `${palette.primary.mint}${getHexAlpha(35)}`,
    'list.filterMatchBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'listFilterWidget.background': palette.dark.grey4,
    'listFilterWidget.outline': `${palette.primary.black}${getHexAlpha(20)}`,
    'listFilterWidget.noMatchesOutline': palette.primary.red,
    'listFilterWidget.shadow': `${palette.primary.black}${getHexAlpha(25)}`,
    'tree.indentGuidesStroke': `${palette.primary.white}${getHexAlpha(35)}`,
    'tree.inactiveIndentGuidesStroke': `${palette.primary.white}${getHexAlpha(20)}`,
    'tree.tableColumnsBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'tree.tableOddRowsBackground': palette.dark.grey4,
  };
};

const menu = (palette) => {
  return {
    'menu.selectionForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'menu.selectionBackground': `${palette.primary.white}${getHexAlpha(5)}`,
    'menu.selectionBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'menu.foreground': `${palette.primary.white}${getHexAlpha(80)}`,
    'menu.background': palette.dark.grey4,
    'menubar.selectionForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'menubar.selectionBackground': `${palette.primary.white}${getHexAlpha(5)}`,
    'menubar.selectionBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'menu.separatorBackground': `${palette.primary.white}${getHexAlpha(10)}`,
    'menu.border': `${palette.primary.black}${getHexAlpha(20)}`,
  };
};

const mergeConflicts = (palette) => {
  return {
    'merge.currentHeaderBackground': `${palette.primary.mint}${getHexAlpha(55)}`,
    'merge.currentContentBackground': `${palette.primary.mint}${getHexAlpha(20)}`,
    'merge.incomingHeaderBackground': `${palette.primary.blue}${getHexAlpha(55)}`,
    'merge.incomingContentBackground': `${palette.primary.blue}${getHexAlpha(20)}`,
    'merge.border': `${palette.primary.white}${getHexAlpha(10)}`,
    'merge.commonContentBackground': `${palette.primary.white}${getHexAlpha(10)}`,
    'merge.commonHeaderBackground': `${palette.primary.white}${getHexAlpha(20)}`,
    'editorOverviewRuler.currentContentForeground': `${palette.primary.mint}${getHexAlpha(55)}`,
    'editorOverviewRuler.incomingContentForeground': `${palette.primary.blue}${getHexAlpha(55)}`,
    'editorOverviewRuler.commonContentForeground': `${palette.primary.white}${getHexAlpha(35)}`,
    'editorOverviewRuler.commentForeground': `${palette.primary.white}${getHexAlpha(20)}`,
    'editorOverviewRuler.commentUnresolvedForeground': `${palette.primary.blue}${getHexAlpha(80)}`,
    'mergeEditor.change.background': `${palette.primary.white}${getHexAlpha(5)}`,
    'mergeEditor.change.word.background': `${palette.primary.white}${getHexAlpha(10)}`,
    'mergeEditor.conflict.unhandledUnfocused.border': `${palette.primary.red}${getHexAlpha(55)}`,
    'mergeEditor.conflict.unhandledFocused.border': palette.primary.red,
    'mergeEditor.conflict.handledUnfocused.border': `${palette.primary.green}${getHexAlpha(55)}`,
    'mergeEditor.conflict.handledFocused.border': palette.primary.green,
    'mergeEditor.conflict.handled.minimapOverViewRuler': `${palette.primary.green}${getHexAlpha(55)}`,
    'mergeEditor.conflict.unhandled.minimapOverViewRuler': `${palette.primary.red}${getHexAlpha(55)}`,
    'mergeEditor.conflictingLines.background': `${palette.primary.orange}${getHexAlpha(20)}`,
    'mergeEditor.changeBase.background': `${palette.primary.white}${getHexAlpha(5)}`,
    'mergeEditor.changeBase.word.background': `${palette.primary.white}${getHexAlpha(10)}`,
    'mergeEditor.conflict.input1.background': `${palette.primary.blue}${getHexAlpha(55)}`,
    'mergeEditor.conflict.input2.background': `${palette.primary.mint}${getHexAlpha(55)}`,
  };
};

const minimap = (palette) => {
  return {
    'minimap.findMatchHighlight': `${palette.primary.mint}${getHexAlpha(35)}`,
    'minimap.selectionHighlight': `${palette.primary.white}${getHexAlpha(35)}`,
    'minimap.errorHighlight': `${palette.primary.red}${getHexAlpha(35)}`,
    'minimap.warningHighlight': `${palette.primary.orange}${getHexAlpha(35)}`,
    'minimap.background': palette.dark.grey2,
    'minimap.selectionOccurrenceHighlight': `${palette.primary.white}${getHexAlpha(20)}`,
    'minimap.foregroundOpacity': palette.primary.white,
    'minimap.infoHighlight': `${palette.primary.blue}${getHexAlpha(35)}`,
    'minimapSlider.background': `${palette.primary.white}${getHexAlpha(5)}`,
    'minimapSlider.hoverBackground': `${palette.primary.white}${getHexAlpha(10)}`,
    'minimapSlider.activeBackground': `${palette.primary.white}${getHexAlpha(3)}`,
    'minimapGutter.addedBackground': palette.primary.green,
    'minimapGutter.modifiedBackground': palette.primary.blue,
    'minimapGutter.deletedBackground': palette.primary.red,
  };
};

const notebook = (palette) => {
  return {
    'notebook.editorBackground': palette.dark.grey3,
    'notebook.cellBorderColor': `${palette.primary.white}${getHexAlpha(10)}`,
    'notebook.cellHoverBackground': `${palette.primary.white}${getHexAlpha(3)}`,
    'notebook.cellInsertionIndicator': palette.primary.pink,
    'notebook.cellStatusBarItemHoverBackground': `${palette.primary.white}${getHexAlpha(5)}`,
    'notebook.cellToolbarSeparator': `${palette.primary.black}${getHexAlpha(20)}`,
    'notebook.cellEditorBackground': palette.dark.grey1,
    'notebook.focusedCellBackground': `${palette.primary.white}${getHexAlpha(3)}`,
    'notebook.focusedCellBorder': palette.primary.pink,
    'notebook.focusedEditorBorder': `#757575${getHexAlpha(40)}`,
    'notebook.inactiveFocusedCellBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'notebook.inactiveSelectedCellBorder': `#757575${getHexAlpha(40)}`,
    'notebook.outputContainerBackgroundColor': palette.dark.grey2,
    'notebook.outputContainerBorderColor': `${palette.primary.white}${getHexAlpha(10)}`,
    'notebook.selectedCellBackground': `${palette.primary.white}${getHexAlpha(3)}`,
    'notebook.selectedCellBorder': palette.primary.pink,
    'notebook.symbolHighlightBackground': palette.alert,
    'notebookScrollbarSlider.activeBackground': `${palette.primary.white}${getHexAlpha(3)}`,
    'notebookScrollbarSlider.background': `${palette.primary.white}${getHexAlpha(5)}`,
    'notebookScrollbarSlider.hoverBackground': `${palette.primary.white}${getHexAlpha(10)}`,
    'notebookStatusErrorIcon.foreground': palette.primary.red,
    'notebookStatusRunningIcon.foreground': palette.primary.yellow,
    'notebookStatusSuccessIcon.foreground': palette.primary.green,
    'notebookEditorOverviewRuler.runningCellForeground': palette.primary.yellow,
  };
};

const notifications = (palette) => {
  return {
    'notificationCenter.border': `${palette.primary.black}${getHexAlpha(20)}`,
    'notificationCenterHeader.background': palette.dark.grey4,
    'notificationCenterHeader.foreground': `${palette.primary.white}${getHexAlpha(80)}`,
    'notificationToast.border': `${palette.primary.black}${getHexAlpha(20)}`,
    'notifications.foreground': `${palette.primary.white}${getHexAlpha(80)}`,
    'notifications.background': palette.dark.grey4,
    'notifications.border': `${palette.primary.white}${getHexAlpha(10)}`,
    'notificationLink.foreground': palette.primary.pink,
    'notificationsErrorIcon.foreground': palette.primary.red,
    'notificationsWarningIcon.foreground': palette.primary.orange,
    'notificationsInfoIcon.foreground': palette.primary.blue,
  };
};

const panel = (palette) => {
  return {
    'panel.background': palette.dark.grey2,
    'panel.border': `${palette.primary.white}${getHexAlpha(10)}`,
    'panel.dropBorder': palette.primary.pink,
    'panelTitle.activeBorder': palette.primary.pink,
    'panelTitle.activeForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'panelTitle.inactiveForeground': `${palette.primary.white}${getHexAlpha(55)}`,
    'panelInput.border': `${palette.primary.white}${getHexAlpha(10)}`,
    'panelSection.border': `#757575${getHexAlpha(40)}`,
    'panelSection.dropBackground': `${palette.primary.black}${getHexAlpha(30)}`,
    'panelSectionHeader.background': `${palette.primary.white}${getHexAlpha(3)}`,
    'panelSectionHeader.foreground': `${palette.primary.white}${getHexAlpha(55)}`,
    'panelSectionHeader.border': `#757575${getHexAlpha(40)}`,
  };
};

const peekView = (palette) => {
  return {
    'peekView.border': palette.primary.mint,
    'peekViewEditor.background': palette.dark.grey2,
    'peekViewEditorGutter.background': palette.dark.grey3,
    'peekViewEditor.matchHighlightBackground': `${palette.primary.mint}${getHexAlpha(35)}`,
    'peekViewEditor.matchHighlightBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'peekViewResult.background': palette.dark.grey3,
    'peekViewResult.fileForeground': `${palette.primary.white}${getHexAlpha(55)}`,
    'peekViewResult.lineForeground': `${palette.primary.white}${getHexAlpha(55)}`,
    'peekViewResult.matchHighlightBackground': `${palette.primary.mint}${getHexAlpha(35)}`,
    'peekViewResult.selectionBackground': `${palette.primary.white}${getHexAlpha(10)}`,
    'peekViewResult.selectionForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'peekViewTitle.background': palette.tertiary.mint,
    'peekViewTitleDescription.foreground': `${palette.primary.white}${getHexAlpha(55)}`,
    'peekViewTitleLabel.foreground': palette.secondary.mint,
    'peekViewEditorStickyScroll.background': palette.dark.grey4,
  };
};

const ports = (palette) => {
  return {
    'ports.iconRunningProcessForeground': palette.primary.green,
  };
};

const profile = (palette) => {
  return {
    'profileBadge.background': palette.dark.grey5,
    'profileBadge.foreground': `${palette.primary.white}${getHexAlpha(55)}`,
  };
};

const progressBar = (palette) => {
  return {
    'progressBar.background': palette.primary.pink,
  };
};

const pickerGroup = (palette) => {
  return {
    'pickerGroup.border': `${palette.primary.white}${getHexAlpha(10)}`,
    'pickerGroup.foreground': palette.primary.pink,
    'quickInput.background': palette.dark.grey4,
    'quickInput.foreground': `${palette.primary.white}${getHexAlpha(55)}`,
    'quickInputList.focusBackground': `${palette.primary.white}${getHexAlpha(5)}`,
    'quickInputList.focusForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'quickInputList.focusIconForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'quickInputTitle.background': palette.dark.grey1,
  };
};

const scm = (palette) => {
  return {
    'scm.historyItemAdditionsForeground': palette.primary.green,
    'scm.historyItemDeletionsForeground': palette.primary.red,
    'scm.historyItemStatisticsBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'scm.historyItemSelectedStatisticsBorder': `#757575${getHexAlpha(40)}`,
  };
};

const scrollbar = (palette) => {
  return {
    'scrollbar.shadow': `${palette.primary.black}${getHexAlpha(25)}`,
    'scrollbarSlider.activeBackground': `${palette.primary.white}${getHexAlpha(3)}`,
    'scrollbarSlider.background': `${palette.primary.white}${getHexAlpha(5)}`,
    'scrollbarSlider.hoverBackground': `${palette.primary.white}${getHexAlpha(10)}`,
  };
};

const settings = (palette) => {
  return {
    'settings.headerForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'settings.modifiedItemIndicator': palette.primary.blue,
    'settings.dropdownBackground': `${palette.primary.white}${getHexAlpha(5)}`,
    'settings.dropdownForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'settings.dropdownBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'settings.dropdownListBorder': `${palette.primary.black}${getHexAlpha(20)}`,
    'settings.checkboxBackground': `${palette.primary.white}${getHexAlpha(5)}`,
    'settings.checkboxForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'settings.checkboxBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'settings.rowHoverBackground': `${palette.primary.white}${getHexAlpha(3)}`,
    'settings.textInputBackground': `${palette.primary.white}${getHexAlpha(5)}`,
    'settings.textInputForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'settings.textInputBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'settings.numberInputBackground': `${palette.primary.white}${getHexAlpha(5)}`,
    'settings.numberInputForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'settings.numberInputBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'settings.focusedRowBackground': `${palette.primary.white}${getHexAlpha(3)}`,
    'settings.focusedRowBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'settings.headerBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'settings.sashBorder': `#757575${getHexAlpha(40)}`,
    'settings.settingsHeaderHoverForeground': palette.primary.white,
  };
};

const sideBar = (palette) => {
  return {
    'sideBar.background': palette.dark.grey2,
    'sideBar.foreground': `${palette.primary.white}${getHexAlpha(55)}`,
    'sideBar.border': `${palette.primary.white}${getHexAlpha(10)}`,
    'sideBar.dropBackground': `${palette.primary.black}${getHexAlpha(30)}`,
    'sideBarTitle.foreground': `${palette.primary.white}${getHexAlpha(80)}`,
    'sideBarSectionHeader.background': `${palette.primary.white}${getHexAlpha(3)}`,
    'sideBarSectionHeader.foreground': `${palette.primary.white}${getHexAlpha(55)}`,
    'sideBarSectionHeader.border': `#757575${getHexAlpha(40)}`,
  };
};

const simpleFindWidget = (palette) => {
  return {
    'simpleFindWidget.sashBorder': palette.primary.pink,
  };
};

const snippets = (palette) => {
  return {
    'editor.snippetTabstopHighlightBackground': `${palette.primary.blue}${getHexAlpha(35)}`,
    'editor.snippetTabstopHighlightBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'editor.snippetFinalTabstopHighlightBackground': palette.transparent,
    'editor.snippetFinalTabstopHighlightBorder': palette.primary.blue,
  };
};

const statusBar = (palette) => {
  return {
    'statusBar.background': palette.dark.grey1,
    'statusBar.foreground': `${palette.primary.white}${getHexAlpha(80)}`,
    'statusBar.border': `${palette.primary.white}${getHexAlpha(10)}`,
    'statusBar.debuggingBackground': palette.tertiary.yellow,
    'statusBar.debuggingForeground': palette.secondary.yellow,
    'statusBar.debuggingBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'statusBar.noFolderBackground': palette.tertiary.red,
    'statusBar.noFolderForeground': palette.secondary.red,
    'statusBar.noFolderBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'statusBarItem.activeBackground': `${palette.primary.white}${getHexAlpha(3)}`,
    'statusBarItem.hoverForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'statusBarItem.hoverBackground': `${palette.primary.white}${getHexAlpha(5)}`,
    'statusBarItem.prominentForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'statusBarItem.prominentBackground': palette.dark.grey5,
    'statusBarItem.prominentHoverForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'statusBarItem.prominentHoverBackground': '#434343',
    'statusBarItem.remoteBackground': palette.tertiary.mint,
    'statusBarItem.remoteForeground': palette.secondary.mint,
    'statusBarItem.remoteHoverBackground': '#343c3b',
    'statusBarItem.remoteHoverForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'statusBarItem.errorBackground': palette.tertiary.red,
    'statusBarItem.errorForeground': palette.secondary.red,
    'statusBarItem.errorHoverBackground': '#463434',
    'statusBarItem.errorHoverForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'statusBarItem.warningBackground': palette.tertiary.orange,
    'statusBarItem.warningForeground': palette.secondary.orange,
    'statusBarItem.warningHoverBackground': '#3e3831',
    'statusBarItem.warningHoverForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'statusBarItem.compactHoverBackground': '#FFFFFF29',
    'statusBarItem.focusBorder': `#757575${getHexAlpha(40)}`,
    'statusBar.focusBorder': `#757575${getHexAlpha(40)}`,
    'statusBarItem.offlineBackground': palette.tertiary.red,
    'statusBarItem.offlineForeground': palette.secondary.red,
    'statusBarItem.offlineHoverBackground': '#463434',
    'statusBarItem.offlineHoverForeground': `${palette.primary.white}${getHexAlpha(80)}`,
  };
};

const symbolIcon = (palette) => {
  return {
    'symbolIcon.arrayForeground': palette.primary.blue,
    'symbolIcon.booleanForeground': palette.primary.blue,
    'symbolIcon.classForeground': palette.primary.yellow,
    'symbolIcon.colorForeground': `${palette.primary.white}${getHexAlpha(55)}`,
    'symbolIcon.constantForeground': palette.secondary.mint,
    'symbolIcon.constructorForeground': palette.primary.orange,
    'symbolIcon.enumeratorForeground': palette.primary.mint,
    'symbolIcon.enumeratorMemberForeground': palette.secondary.mint,
    'symbolIcon.eventForeground': palette.secondary.red,
    'symbolIcon.fieldForeground': palette.secondary.yellow,
    'symbolIcon.fileForeground': `${palette.primary.white}${getHexAlpha(55)}`,
    'symbolIcon.folderForeground': `${palette.primary.white}${getHexAlpha(55)}`,
    'symbolIcon.functionForeground': palette.primary.orange,
    'symbolIcon.interfaceForeground': palette.primary.mint,
    'symbolIcon.keyForeground': palette.secondary.purple,
    'symbolIcon.keywordForeground': palette.primary.pink,
    'symbolIcon.methodForeground': palette.primary.orange,
    'symbolIcon.moduleForeground': `${palette.primary.white}${getHexAlpha(55)}`,
    'symbolIcon.namespaceForeground': `${palette.primary.white}${getHexAlpha(55)}`,
    'symbolIcon.nullForeground': palette.primary.blue,
    'symbolIcon.numberForeground': palette.secondary.green,
    'symbolIcon.objectForeground': palette.primary.mint,
    'symbolIcon.operatorForeground': `${palette.primary.white}${getHexAlpha(55)}`,
    'symbolIcon.packageForeground': `${palette.primary.white}${getHexAlpha(55)}`,
    'symbolIcon.propertyForeground': palette.secondary.yellow,
    'symbolIcon.referenceForeground': palette.primary.purple,
    'symbolIcon.snippetForeground': palette.secondary.blue,
    'symbolIcon.stringForeground': palette.primary.brown,
    'symbolIcon.structForeground': palette.primary.yellow,
    'symbolIcon.textForeground': `${palette.primary.white}${getHexAlpha(55)}`,
    'symbolIcon.typeParameterForeground': palette.secondary.mint,
    'symbolIcon.unitForeground': palette.secondary.green,
    'symbolIcon.variableForeground': palette.secondary.orange,
  };
};

const testing = (palette) => {
  return {
    'testing.iconFailed': palette.primary.red,
    'testing.iconErrored': palette.primary.red,
    'testing.iconPassed': palette.primary.green,
    'testing.runAction': palette.primary.green,
    'testing.iconQueued': palette.primary.yellow,
    'testing.iconUnset': `${palette.primary.white}${getHexAlpha(55)}`,
    'testing.iconSkipped': `${palette.primary.white}${getHexAlpha(55)}`,
    'testing.peekBorder': palette.secondary.red,
    'testing.peekHeaderBackground': palette.tertiary.red,
    'testing.message.error.decorationForeground': palette.primary.red,
    'testing.message.error.lineBackground': `${palette.primary.red}${getHexAlpha(35)}`,
    'testing.message.info.decorationForeground': palette.primary.blue,
    'testing.message.info.lineBackground': `${palette.primary.blue}${getHexAlpha(35)}`,
  };
};

const text = (palette) => {
  return {
    'textBlockQuote.background': `${palette.primary.white}${getHexAlpha(3)}`,
    'textBlockQuote.border': palette.primary.pink,
    'textCodeBlock.background': `${palette.primary.white}${getHexAlpha(3)}`,
    'textLink.activeForeground': palette.primary.pink,
    'textLink.foreground': palette.primary.pink,
    'textPreformat.foreground': palette.primary.pink,
    'textPreformat.background': `${palette.primary.white}${getHexAlpha(5)}`,
    'textSeparator.foreground': `${palette.primary.white}${getHexAlpha(10)}`,
  };
};

const titleBar = (palette) => {
  return {
    'titleBar.activeBackground': palette.dark.grey1,
    'titleBar.activeForeground': `${palette.primary.white}${getHexAlpha(80)}`,
    'titleBar.inactiveBackground': palette.dark.grey1,
    'titleBar.inactiveForeground': `${palette.primary.white}${getHexAlpha(55)}`,
    'titleBar.border': `${palette.primary.white}${getHexAlpha(10)}`,
  };
};

const welcomePage = (palette) => {
  return {
    'welcomePage.background': palette.dark.grey3,
    'welcomePage.progress.background': `${palette.primary.white}${getHexAlpha(5)}`,
    'welcomePage.progress.foreground': palette.primary.pink,
    'welcomePage.tileBackground': `${palette.primary.white}${getHexAlpha(5)}`,
    'welcomePage.tileHoverBackground': `${palette.primary.white}${getHexAlpha(10)}`,
    'welcomePage.tileBorder': `${palette.primary.white}${getHexAlpha(10)}`,
    'walkThrough.embeddedEditorBackground': palette.dark.grey1,
    'walkthrough.stepTitle.foreground': `${palette.primary.white}${getHexAlpha(80)}`,
  };
};

const windowBorder = (palette) => {
  return {
    'window.activeBorder': null,
    'window.inactiveBorder': null,
  };
};

export const getEditorColors = (themeContext) => {
  const palette = themeContext.palette;
  return {
    ...actionBar(palette),
    ...activityBar(palette),
    ...badge(palette),
    ...banner(palette),
    ...breadcrumb(palette),
    ...button(palette),
    ...checkbox(palette),
    ...charts(palette),
    ...chat(palette),
    ...commandCenter(palette),
    ...commentsView(palette),
    ...contrast(palette),
    ...core(palette),
    ...debug(palette),
    ...diffEditor(palette),
    ...dropdown(palette),
    ...editor(palette),
    ...editorGroup(palette),
    ...editorWidgets(palette),
    ...extensions(palette),
    ...git(palette),
    ...input(palette),
    ...inlineChat(palette),
    ...keyBinding(palette),
    ...listsAndTrees(palette),
    ...menu(palette),
    ...mergeConflicts(palette),
    ...minimap(palette),
    ...notebook(palette),
    ...notifications(palette),
    ...panel(palette),
    ...peekView(palette),
    ...ports(palette),
    ...profile(palette),
    ...progressBar(palette),
    ...pickerGroup(palette),
    ...scm(palette),
    ...scrollbar(palette),
    ...sideBar(palette),
    ...simpleFindWidget(palette),
    ...snippets(palette),
    ...statusBar(palette),
    ...symbolIcon(palette),
    ...terminal(palette),
    ...testing(palette),
    ...text(palette),
    ...titleBar(palette),
    ...toolbar(palette),
    ...welcomePage(palette),
    ...windowBorder(palette),
  };
};
