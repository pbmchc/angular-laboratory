import * as Lint from 'tslint';
import * as ts from 'typescript';

interface StatementKeywordDetails {
    keyword: string;
    position: number;
}

const STATEMENT_KEYWORDS: ts.SyntaxKind[] = [
    ts.SyntaxKind.CatchKeyword,
    ts.SyntaxKind.ForKeyword,
    ts.SyntaxKind.IfKeyword,
    ts.SyntaxKind.SwitchKeyword,
    ts.SyntaxKind.WhileKeyword
];

export class Rule extends Lint.Rules.AbstractRule {
    public static readonly FAILURE_STRING = 'White space of death 💀';

    public apply(sourceFile: ts.SourceFile): Lint.RuleFailure[] {
        return this.applyWithFunction(sourceFile, searchForSpaceOfDeath);
    }
}

function searchForSpaceOfDeath(context: Lint.WalkContext<void>) {
    const { sourceFile } = context;

    sourceFile.forEachChild(inspectNode);

    function inspectNode(node: ts.Node) {
        if(isStatementKeyword(node.kind)) {
            const { keyword, position } = getStatementKeywordDetails(node);
            const statementOpeningText = getStatementOpeningText(node, keyword);
            const fix = new Lint.Replacement(position + keyword.length, 1, '');

            if(containsWhitespace(statementOpeningText)) {
                context.addFailureAt(position, keyword.length + 1, Rule.FAILURE_STRING, fix);
            }
        }

        if(!node.getChildren()) {
            return;
        }

        node.getChildren().forEach(inspectNode);
    }

    function getStatementKeywordDetails(node: ts.Node): StatementKeywordDetails {
        return {
            keyword: node.getText(),
            position: node.getStart()
        };
    }

    function getStatementOpeningText(node: ts.Node, keyword: string): string {
        const statementText = node.parent.getText(sourceFile);

        return statementText.substr(
            statementText.indexOf(keyword),
            keyword.length + 1
        );
    }

    function isStatementKeyword(nodeType: ts.SyntaxKind): boolean {
        return STATEMENT_KEYWORDS.indexOf(nodeType) !== -1;
    }

    function containsWhitespace(nodeText: string): boolean {
        return nodeText.indexOf(' ') !== -1;
    }
}
