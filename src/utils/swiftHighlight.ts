function escapeHtml(value: string) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function highlightSwift(line: string) {
  return escapeHtml(line)
    .replace(/(\/\/.*)$/g, '<span class="swift-comment">$1</span>')
    .replace(/(&quot;.*?&quot;)/g, '<span class="swift-string">$1</span>')
    .replace(
      /\b(public|private|func|let|var|if|guard|else|return|for|in|continue|nil|true|false)\b/g,
      '<span class="swift-keyword">$1</span>',
    )
    .replace(/\b([A-Z][A-Za-z0-9_]+)\b/g, '<span class="swift-type">$1</span>');
}

function isCoreSwiftLine(line: string) {
  return /StageUniquenessAnalyzer|makeExactCoverModel|searchAlternativeSolution|hiddenCandidateIndices|hasAlternative|didReachSearchLimit|StageHintProvider|nextHint|overlapCount|cellsToApply|StageProgressStore|unlockedStageOrder|completedStageIDs|markCompleted|markStageCompleted|AdCoordinator|AdRemovalStore|InterstitialAdProvider|RewardedAdProvider|presentPostCompletionInterstitial|refreshEntitlements|hasRemovedAds|ToolPickerHost|BoardView|BoardViewportUIView|BKRenderer|scrollView|miniMapView|focusBoard|isCameraNeeded|isBoardClipped|minimumNumberOfTouches|onBoardPointSelected|onProgressValidated|PlayerProgressValidator|#expect|@Test|StageValidator|StageQualityEvaluator|canonicalRotationKey|rotatedShape|occupiedCells|makePlacementCandidates|validator\.validate|evaluator\.evaluate|difficultyEvaluator\.evaluate|StageSerialization\.encode|sortedManifest|missingCells|extraCells|makePaintedShapeGroups|matchesBaseShape|normalizedCells|fillRatio|allSatisfy/.test(
    line,
  );
}

export function highlightedSwiftLines(code: string) {
  return code.split('\n').map((line, index) => ({
    index,
    html: highlightSwift(line),
    core: isCoreSwiftLine(line),
  }));
}