(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../ngx-infi-markdown/src/lib/_core/components/editor/editor.component.ts":
/*!********************************************************************************!*\
  !*** ../ngx-infi-markdown/src/lib/_core/components/editor/editor.component.ts ***!
  \********************************************************************************/
/*! exports provided: EditorComponent, Range */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Range", function() { return Range; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _min_toolbar_min_toolbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../min-toolbar/min-toolbar.component */ "../ngx-infi-markdown/src/lib/_core/components/min-toolbar/min-toolbar.component.ts");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils */ "../ngx-infi-markdown/src/lib/_core/utils/index.ts");
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/storage.service */ "../ngx-infi-markdown/src/lib/_core/services/storage.service.ts");
/* harmony import */ var _services_tree_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/tree.service */ "../ngx-infi-markdown/src/lib/_core/services/tree.service.ts");
/* harmony import */ var _directives_resizable_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../directives/resizable.directive */ "../ngx-infi-markdown/src/lib/_core/directives/resizable.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../directives/tooltip.directive */ "../ngx-infi-markdown/src/lib/_core/directives/tooltip.directive.ts");













const _c0 = ["h1"];
const _c1 = ["h2"];
const _c2 = ["h3"];
const _c3 = ["h4"];
const _c4 = ["ol"];
const _c5 = ["ul"];
const _c6 = ["paragraph"];
const _c7 = ["quote"];
const _c8 = ["toolbar"];
const _c9 = ["toolbarContainer"];
const _c10 = ["editableDiv"];
function EditorComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 29, 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditorComponent_div_4_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r14); const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](1); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r13.openToolbar(_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function EditorComponent_div_44_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 36, 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("paste", function EditorComponent_div_44_Template_div_paste_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const i_r15 = ctx.$implicit; const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](4); const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.onPaste($event, i_r15, _r16); })("focus", function EditorComponent_div_44_Template_div_focus_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const i_r15 = ctx.$implicit; const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r19.onFocus($event, i_r15); })("input", function EditorComponent_div_44_Template_div_input_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const i_r15 = ctx.$implicit; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r20.onTextTyped($event, i_r15); })("keydown", function EditorComponent_div_44_Template_div_keydown_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const i_r15 = ctx.$implicit; const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r21.onKeyEntered($event, i_r15); })("keypress", function EditorComponent_div_44_Template_div_keypress_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const i_r15 = ctx.$implicit; const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r22.onKeyPressed($event, i_r15); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r15 = ctx.$implicit;
    const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", i_r15 === ctx_r11.activeRow ? "#E0E5EB" : "#F4F7FA");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("", i_r15, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("background-color", i_r15 === ctx_r11.activeRow ? "#F7FAFC" : "#FFFFFF");
} }
const BR_ELEMENT = '<br>';
const STORAGE_KEY = 'INFI_MARKDOWN_DRAFT';
class EditorComponent {
    constructor(renderer, treeService, resolver, resizableDirective, storageService) {
        this.renderer = renderer;
        this.treeService = treeService;
        this.resolver = resolver;
        this.resizableDirective = resizableDirective;
        this.storageService = storageService;
        this.toolbarState$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.toolbarStateObs$ = this.toolbarState$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        this.tagsMap = new Map();
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.storageService) {
                const savedEntity = this.storageService.getItem(STORAGE_KEY) || null;
                this.treeService.loadEntity(savedEntity);
            }
            else {
                this.treeService.loadEntity(null);
            }
            Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(window, 'beforeunload'), this.destroy$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(() => this.treeService.typed), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)).subscribe(() => {
                this.storageService.setItem(STORAGE_KEY, this.treeService.entity);
            });
            this.toolbarStateObs$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe((isOpened) => {
                this.toggleToolbar(isOpened);
            });
            this.resizableDirective.onWidthChange.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(({ pxWidth: value }) => {
                this.hiddenSegments = value < this.largestSegmentWidth + 100;
                if (!this.hiddenSegments) {
                    this.openedToolbar = this.hiddenSegments;
                    this.toolbarState$.next(this.openedToolbar);
                }
            });
            this.repaintEditor();
        });
    }
    ngAfterViewInit() {
        const toolbarChildren = Array.from(this.toolbar.nativeElement.children);
        this.largestSegmentWidth = Math.max(...toolbarChildren.map((o) => o.clientWidth), 0);
        this.tagsMap
            .set('primaryHeader', this.hPrimaryEl)
            .set('secondaryHeader', this.hSecondaryEl)
            .set('tertiaryHeader', this.hTertiaryEl)
            .set('quaternaryHeader', this.hQuaternaryEl)
            .set('orderedList', this.olEl)
            .set('unorderedList', this.ulEl)
            .set('paragraph', this.paragraphEl)
            .set('quote', this.quoteEl);
        this.divs.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe((data) => {
            this.activeRow && data._results[this.activeRow - 1].nativeElement.focus();
        });
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
        this.componentRef.destroy();
    }
    repaintEditor() {
        const entityValues = this.treeService.entityValues;
        this.rows = range(1, entityValues.length);
        setTimeout(() => {
            this.divs.forEach((div, i) => {
                div.nativeElement.innerHTML = entityValues[i] || '';
            });
        });
    }
    onFocus(event, rowNo) {
        const rowData = this.treeService.getEntityRow(rowNo);
        this.activeRow = rowNo;
        // temporarily switched off
        // const caretPosition = rowData.text.replace(new RegExp(BR_ELEMENT, 'g'), '').length;
        // if (caretPosition > 0) {
        //   setTimeout(() => {
        //     setCaretAtPosition(caretPosition, event.target.lastChild);
        //   });
        // }
        if (this.openedToolbar) {
            this.componentRef.instance.activeRow = rowNo;
            this.componentRef.instance.activeTag = this.activeTag;
            this.componentRef.instance.refreshView(rowData);
            return;
        }
        const prevActive = this.activeTag;
        this.activeTag = rowData.tag;
        if (this.activeTag && this.activeTag !== rowData.tag) {
            this.renderer.removeClass(this.tagsMap.get(this.activeTag).nativeElement, 'tag--selected');
        }
        if (prevActive && prevActive !== this.activeTag) {
            this.renderer.removeClass(this.tagsMap.get(prevActive).nativeElement, 'tag--selected');
        }
        this.renderer.addClass(this.tagsMap.get(rowData.tag).nativeElement, 'tag--selected');
    }
    onPaste(event, rowNo, ref) {
        event.preventDefault();
        const clipboardData = event.clipboardData;
        const pastedData = clipboardData.getData('Text');
        ref.innerHTML = pastedData;
        const payload = {
            rowNo,
            text: pastedData,
            opName: 'addText',
        };
        this.treeService.updateEntityTree(payload);
    }
    onTextTyped(event, rowNo) {
        const payload = {
            rowNo,
            text: event.target.innerHTML,
            opName: 'addText',
        };
        this.treeService.updateEntityTree(payload);
    }
    onKeyPressed(event, rowNo) {
        const rowData = this.treeService.getEntityRow(rowNo);
        if (event.key === 'Enter') {
            const [, end] = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getCaretPosition"])(event.target);
            if (!event.shiftKey) {
                event.preventDefault();
                const indexes = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["findAllOccurrencesOfPattern"])(rowData.text, BR_ELEMENT);
                const correctionGrade = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["calculateCorrection"])(end, indexes, BR_ELEMENT.length);
                const caretPosition = indexes.some((index) => end >= index && end < index + BR_ELEMENT.length) ? 0 : end;
                const divisionIndex = caretPosition + correctionGrade * BR_ELEMENT.length;
                const beginText = rowData.text.slice(0, divisionIndex);
                const endText = rowData.text.slice(divisionIndex).replace(new RegExp(`^${BR_ELEMENT}`), '');
                const rows = [
                    {
                        rowNo,
                        text: beginText,
                        tag: rowData.tag,
                        opName: 'addRow',
                    },
                    {
                        rowNo: rowNo + 1,
                        text: endText,
                        tag: rowData.tag,
                        opName: 'addRow',
                    },
                ];
                this.treeService.insertEntityRow(rowNo, rows);
                this.activeRow = rowNo + 1;
                this.repaintEditor();
            }
        }
    }
    onKeyEntered(event, rowNo) {
        const { high } = this.rows;
        const rowData = this.treeService.getEntityRow(rowNo);
        const [, end] = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["getCaretPosition"])(event.target);
        if (event.key === 'Backspace') {
            if (high === 1 || this.activeRow === 1 || end > 0) {
                // } || end === 0 && rowData.text.startsWith(BR_ELEMENT)) {
                return;
            }
            const previousRowData = this.treeService.getEntityRow(rowNo - 1);
            const text = rowData.text === BR_ELEMENT ? '' : rowData.text;
            const indexes = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["findAllOccurrencesOfPattern"])(previousRowData.text, BR_ELEMENT);
            const correctionGrade = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["calculateCorrection"])(previousRowData.text.length, indexes, BR_ELEMENT.length);
            const divAffected = this.divs.find((x, i) => i === rowNo - 2).nativeElement;
            const caretPosition = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["calculateCaretPosition"])(divAffected, correctionGrade * 2);
            this.treeService.removeEntityRow(rowNo, text);
            this.repaintEditor();
            this.activeRow -= 1;
            if (caretPosition > 0) {
                setTimeout(() => {
                    Object(_utils__WEBPACK_IMPORTED_MODULE_5__["setCaretAtPosition"])(caretPosition, divAffected.childNodes[correctionGrade * 2]);
                });
            }
        }
        else if (event.key === 'Delete') {
            if (end !== rowData.text.replace(new RegExp(BR_ELEMENT, 'g'), '').length || rowNo === high) {
                return;
            }
            event.preventDefault();
            const indexes = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["findAllOccurrencesOfPattern"])(rowData.text, BR_ELEMENT);
            const correctionGrade = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["calculateCorrection"])(rowData.text.length, indexes, BR_ELEMENT.length);
            const divAffected = this.divs.find((x, i) => i === rowNo - 1).nativeElement;
            const caretPosition = Object(_utils__WEBPACK_IMPORTED_MODULE_5__["calculateCaretPosition"])(divAffected, correctionGrade * 2);
            const nextRowData = this.treeService.getEntityRow(rowNo + 1);
            const text = nextRowData.text; // === BR_ELEMENT ? '' : nextRowData.text;
            this.treeService.removeEntityRow(rowNo + 1, text);
            this.repaintEditor();
            if (caretPosition > 0) {
                setTimeout(() => {
                    Object(_utils__WEBPACK_IMPORTED_MODULE_5__["setCaretAtPosition"])(caretPosition, divAffected.childNodes[correctionGrade * 2]);
                });
            }
        }
        else if (event.key === 'ArrowUp') {
            if (this.activeRow === 1 || (end !== 0 && rowData.text.includes(BR_ELEMENT))) {
                return;
            }
            this.activeRow -= 1;
            this.divs.toArray()[this.activeRow - 1].nativeElement.focus();
        }
        else if (event.key === 'ArrowDown') {
            if (this.activeRow === high ||
                (end !== rowData.text.replace(new RegExp(BR_ELEMENT, 'g'), '').length && rowData.text.includes(BR_ELEMENT))) {
                return;
            }
            this.activeRow += 1;
            this.divs.toArray()[this.activeRow - 1].nativeElement.focus();
        }
    }
    onTagSet(tagName) {
        if (!this.activeRow) {
            return;
        }
        this.activeTag = tagName;
        const { tag = null } = this.treeService.getEntityRow(this.activeRow);
        const payload = {
            rowNo: this.activeRow,
            tag: tagName,
            opName: 'setTag',
        };
        this.treeService.updateEntityTree(payload);
        if (tag) {
            this.renderer.removeClass(this.tagsMap.get(tag).nativeElement, 'tag--selected');
        }
        this.renderer.addClass(this.tagsMap.get(tagName).nativeElement, 'tag--selected');
        this.divs.toArray()[this.activeRow - 1].nativeElement.focus();
    }
    openToolbar(hamburgerRef) {
        hamburgerRef.classList.toggle('change');
        this.openedToolbar = !this.openedToolbar;
        this.toolbarState$.next(this.openedToolbar);
    }
    toggleToolbar(isOpened) {
        if (!this.activeRow) {
            return;
        }
        if (!isOpened) {
            this.container.clear();
        }
        else {
            const factory = this.resolver.resolveComponentFactory(_min_toolbar_min_toolbar_component__WEBPACK_IMPORTED_MODULE_4__["MinToolbarComponent"]);
            this.componentRef = this.container.createComponent(factory);
            this.componentRef.instance.activeRow = this.activeRow;
            this.componentRef.instance.onTagSelect.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this.destroy$)).subscribe(({ tagName, rowTagName }) => {
                const prevActive = this.activeTag;
                this.activeTag = tagName;
                if (this.activeTag && this.activeTag !== rowTagName) {
                    this.renderer.removeClass(this.tagsMap.get(rowTagName).nativeElement, 'tag--selected');
                }
                if (prevActive && prevActive !== this.activeTag) {
                    this.renderer.removeClass(this.tagsMap.get(prevActive).nativeElement, 'tag--selected');
                }
                this.renderer.addClass(this.tagsMap.get(this.activeTag).nativeElement, 'tag--selected');
            });
        }
    }
}
EditorComponent.ɵfac = function EditorComponent_Factory(t) { return new (t || EditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_tree_service__WEBPACK_IMPORTED_MODULE_7__["TreeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_directives_resizable_directive__WEBPACK_IMPORTED_MODULE_8__["ResizableDirective"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"])); };
EditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditorComponent, selectors: [["editor"]], viewQuery: function EditorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c4, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c5, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c6, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c7, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c8, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c9, true, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵviewQuery"](_c10, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.hPrimaryEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.hSecondaryEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.hTertiaryEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.hQuaternaryEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.olEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.ulEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.paragraphEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.quoteEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.toolbar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.container = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵloadQuery"]()) && (ctx.divs = _t);
    } }, decls: 45, vars: 10, consts: [[1, "tags"], [1, "tag-col", "tag-col--1"], [1, "tag-col", "tag-col--2"], ["toolbar", ""], ["class", "hamburger", 3, "click", 4, "ngIf"], [1, "tag-segments"], [1, "tag-info"], [1, "separator"], ["tooltip", "Primary header", 1, "tag", "tag--h1", 3, "click"], ["h1", ""], ["tooltip", "Secondary header", 1, "tag", "tag--h2", 3, "click"], ["h2", ""], ["tooltip", "Tertiary header", 1, "tag", "tag--h3", 3, "click"], ["h3", ""], ["tooltip", "Quaternary header", 1, "tag", "tag--h4", 3, "click"], ["h4", ""], ["tooltip", "Paragraph", 1, "tag", "tag--paragraph", 3, "click"], ["paragraph", ""], ["tooltip", "Quote", 1, "tag", "tag--quote", 3, "click"], ["quote", ""], ["src", "../../../../assets/quote.png"], ["tooltip", "Ordered list", 1, "tag", "tag--ol", 3, "click"], ["ol", ""], ["src", "../../../../assets/ordered-list.png"], ["tooltip", "Unordered list", 1, "tag", "tag--ul", 3, "click"], ["ul", ""], ["src", "../../../../assets/unordered-list.png"], ["toolbarContainer", ""], ["class", "line", 4, "ngFor", "ngForOf"], [1, "hamburger", 3, "click"], ["hamburger", ""], [1, "bar1"], [1, "bar2"], [1, "bar3"], [1, "line"], [1, "number"], ["contenteditable", "true", 1, "input", 3, "paste", "focus", "input", "keydown", "keypress"], ["editableDiv", ""]], template: function EditorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, EditorComponent_div_4_Template, 5, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Headers");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditorComponent_Template_div_click_9_listener() { return ctx.onTagSet("primaryHeader"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditorComponent_Template_div_click_12_listener() { return ctx.onTagSet("secondaryHeader"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditorComponent_Template_div_click_15_listener() { return ctx.onTagSet("tertiaryHeader"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 14, 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditorComponent_Template_div_click_18_listener() { return ctx.onTagSet("quaternaryHeader"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Text");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditorComponent_Template_div_click_25_listener() { return ctx.onTagSet("paragraph"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditorComponent_Template_div_click_28_listener() { return ctx.onTagSet("quote"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Lists");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](34, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditorComponent_Template_div_click_35_listener() { return ctx.onTagSet("orderedList"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](37, "img", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "div", 24, 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function EditorComponent_Template_div_click_38_listener() { return ctx.onTagSet("unorderedList"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](40, "img", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](42, "template", null, 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](44, EditorComponent_div_44_Template, 5, 5, "div", 28);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("height", ctx.hiddenSegments ? "70px" : "auto");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.hiddenSegments);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("visibility", ctx.hiddenSegments ? "hidden" : "visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("visibility", ctx.hiddenSegments ? "hidden" : "visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵstyleProp"]("visibility", ctx.hiddenSegments ? "hidden" : "visible");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.rows);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_10__["TooltipDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]], styles: [".line[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  width: 100%;\n  min-height: 30px;\n}\n.line[_ngcontent-%COMP%]:last-child {\n  border-bottom: 1px solid #D3DAEA;\n}\n.number[_ngcontent-%COMP%] {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 70px;\n  padding-top: 10px;\n  color: #A0AABF;\n  background-color: #F5F7FA;\n  border-right: 1px solid #D3DAEA;\n}\n.input[_ngcontent-%COMP%] {\n  width: calc(100% - 70px);\n  outline: none;\n  border: none;\n  padding: 10px;\n  cursor: text;\n}\n.tags[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n  position: relative;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  border-bottom: 1px solid #D3DAEA;\n}\n.tag-col[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  height: 100%;\n}\n.tag-col--1[_ngcontent-%COMP%] {\n  width: 70px;\n  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0) 25%, rgba(0, 0, 0, 0.08) 0, rgba(0, 0, 0, 0.08) 50%, rgba(255, 255, 255, 0) 0, rgba(255, 255, 255, 0) 75%, rgba(0, 0, 0, 0.08) 0, rgba(0, 0, 0, 0.08));\n  background-size: 14.14px 14.14px;\n  border-right: 1px solid #D3DAEA;\n  position: absolute;\n  top: 0;\n  left: 0;\n  bottom: 0;\n  width: 70px;\n}\n.tag-col--2[_ngcontent-%COMP%] {\n  width: calc(100% - 70px);\n  font-size: 13px;\n  padding: 10px 0 10px 30px;\n  background-color: #f4f7fa;\n  margin-left: 70px;\n  flex-wrap: wrap;\n}\n.tag-col[_ngcontent-%COMP%]   .tag-segments[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  margin: 5px 20px 5px 0;\n}\n.tag-col[_ngcontent-%COMP%]   .tag-segments[_ngcontent-%COMP%]:nth-child(2)   img[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n}\n.tag-col[_ngcontent-%COMP%]   .tag-segments[_ngcontent-%COMP%]:nth-child(3)   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n.tag-info[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.separator[_ngcontent-%COMP%] {\n  height: 30px;\n  margin: 0 15px;\n  border-right: 1.5px solid;\n  -o-border-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #9c9cab 48%, rgba(255, 255, 255, 0) 100%);\n     border-image: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, #9c9cab 48%, rgba(255, 255, 255, 0) 100%);\n  border-image-slice: 1;\n}\n.tag[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 1px solid black;\n  margin-right: 10px;\n  box-shadow: 0 3px 6px #00000029;\n  background-color: #fff;\n}\n.tag--selected[_ngcontent-%COMP%] {\n  background-color: #00DAC6;\n}\n.tag[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n.tag--h1[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 16px;\n}\n.tag--h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 15px;\n}\n.tag--h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 14px;\n}\n.tag--h4[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 13px;\n}\n.tag--ol[_ngcontent-%COMP%], .tag--ul[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n.hamburger[_ngcontent-%COMP%] {\n  display: inline-block;\n  cursor: pointer;\n}\n.bar1[_ngcontent-%COMP%], .bar2[_ngcontent-%COMP%], .bar3[_ngcontent-%COMP%] {\n  width: 35px;\n  height: 5px;\n  background-color: #333;\n  margin: 6px 0;\n  transition: 0.4s;\n}\n.change[_ngcontent-%COMP%]   .bar1[_ngcontent-%COMP%] {\n  transform: rotate(-45deg) translate(-9px, 6px);\n}\n.change[_ngcontent-%COMP%]   .bar2[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n.change[_ngcontent-%COMP%]   .bar3[_ngcontent-%COMP%] {\n  transform: rotate(45deg) translate(-8px, -8px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zb2Jlay9Qcm9qZWN0cy9uZ3gtaW5maS1tYXJrZG93bi9wcm9qZWN0cy9uZ3gtaW5maS1tYXJrZG93bi9zcmMvbGliL19jb3JlL2NvbXBvbmVudHMvZWRpdG9yL2VkaXRvci5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL25neC1pbmZpLW1hcmtkb3duL3NyYy9saWIvX2NvcmUvY29tcG9uZW50cy9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0FDQ0o7QURDSTtFQUNJLGdDQUFBO0FDQ1I7QURHQTtFQUNJLE9BQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0FDQUo7QURHQTtFQUNJLHdCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtBQ0FKO0FER0E7RUFDSSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtBQ0FKO0FER0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUNBSjtBREVJO0VBQ0ksV0FBQTtFQUNBLHNOQUFBO0VBQ0EsZ0NBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtBQ0FSO0FER0k7RUFDSSx3QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDRFI7QURJSTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0FDRlI7QURJUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDRlo7QURLUTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDSFo7QURRQTtFQUNJLGVBQUE7QUNMSjtBRFFBO0VBQ0ksWUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtFQUNBLGdIQUFBO0tBQUEsNkdBQUE7RUFDQSxxQkFBQTtBQ0xKO0FEUUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0FDTEo7QURPSTtFQUNJLHlCQUFBO0FDTFI7QURRSTtFQUNJLGVBQUE7QUNOUjtBRFNJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDUFI7QURVSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ1JSO0FEV0k7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNUUjtBRFlJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDVlI7QURhSTtFQUNJLGVBQUE7QUNYUjtBRGVBO0VBQ0kscUJBQUE7RUFDQSxlQUFBO0FDWko7QURlQTtFQUNJLFdBQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7QUNaSjtBRGVBO0VBQ0ksOENBQUE7QUNaSjtBRGVBO0VBQ0ksVUFBQTtBQ1pKO0FEZUE7RUFDSSw4Q0FBQTtBQ1pKIiwiZmlsZSI6InByb2plY3RzL25neC1pbmZpLW1hcmtkb3duL3NyYy9saWIvX2NvcmUvY29tcG9uZW50cy9lZGl0b3IvZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxpbmUge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtaW4taGVpZ2h0OiAzMHB4O1xuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEM0RBRUE7XG4gICAgfVxufVxuXG4ubnVtYmVyIHtcbiAgICBmbGV4OiAxO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHdpZHRoOiA3MHB4O1xuICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgIGNvbG9yOiAjQTBBQUJGO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGNUY3RkE7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0QzREFFQTtcbn1cblxuLmlucHV0IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjdXJzb3I6IHRleHQ7XG59XG5cbi50YWdzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjRDNEQUVBO1xufVxuXG4udGFnLWNvbCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgJi0tMSB7XG4gICAgICAgIHdpZHRoOiA3MHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsaHNsYSgwLDAlLDEwMCUsMCkgMjUlLHJnYmEoMCwwLDAsLjA4KSAwLHJnYmEoMCwwLDAsLjA4KSA1MCUsaHNsYSgwLDAlLDEwMCUsMCkgMCxoc2xhKDAsMCUsMTAwJSwwKSA3NSUscmdiYSgwLDAsMCwuMDgpIDAscmdiYSgwLDAsMCwuMDgpKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxNC4xNHB4IDE0LjE0cHg7XG4gICAgICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNEM0RBRUE7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHdpZHRoOiA3MHB4O1xuICAgIH1cblxuICAgICYtLTIge1xuICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNzBweCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgcGFkZGluZzogMTBweCAwIDEwcHggMzBweDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI0NCwgMjQ3LCAyNTApO1xuICAgICAgICBtYXJnaW4tbGVmdDogNzBweDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgIH1cblxuICAgIC50YWctc2VnbWVudHMge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIG1hcmdpbjogNXB4IDIwcHggNXB4IDA7XG5cbiAgICAgICAgJjpudGgtY2hpbGQoMikgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgJjpudGgtY2hpbGQoMykgaW1nIHtcbiAgICAgICAgICAgIHdpZHRoOiAyMHB4O1xuICAgICAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4udGFnLWluZm8ge1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbn1cblxuLnNlcGFyYXRvciB7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIG1hcmdpbjogMCAxNXB4O1xuICAgIGJvcmRlci1yaWdodDogMS41cHggc29saWQ7XG4gICAgYm9yZGVyLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAlLCByZ2JhKCM5YzljYWIsIDEpIDQ4JSwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwKSAxMDAlKTtcbiAgICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XG59XG5cbi50YWcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAjMDAwMDAwMjk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuICAgICYtLXNlbGVjdGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwREFDNjtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgICYtLWgxIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgICYtLWgyIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cblxuICAgICYtLWgzIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgICYtLWg0IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgIH1cblxuICAgICYtLW9sLCAmLS11bCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG59XG5cbi5oYW1idXJnZXIge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5iYXIxLCAuYmFyMiwgLmJhcjMge1xuICAgIHdpZHRoOiAzNXB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gICAgbWFyZ2luOiA2cHggMDtcbiAgICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuXG4uY2hhbmdlIC5iYXIxIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCA2cHgpO1xufVxuXG4uY2hhbmdlIC5iYXIyIHtcbiAgICBvcGFjaXR5OiAwO1xufVxuXG4uY2hhbmdlIC5iYXIzIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC04cHgsIC04cHgpO1xufVxuIiwiLmxpbmUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICB3aWR0aDogMTAwJTtcbiAgbWluLWhlaWdodDogMzBweDtcbn1cbi5saW5lOmxhc3QtY2hpbGQge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0QzREFFQTtcbn1cblxuLm51bWJlciB7XG4gIGZsZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA3MHB4O1xuICBwYWRkaW5nLXRvcDogMTBweDtcbiAgY29sb3I6ICNBMEFBQkY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNGNUY3RkE7XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNEM0RBRUE7XG59XG5cbi5pbnB1dCB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICBwYWRkaW5nOiAxMHB4O1xuICBjdXJzb3I6IHRleHQ7XG59XG5cbi50YWdzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI0QzREFFQTtcbn1cblxuLnRhZy1jb2wge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4udGFnLWNvbC0tMSB7XG4gIHdpZHRoOiA3MHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMjUlLCByZ2JhKDAsIDAsIDAsIDAuMDgpIDAsIHJnYmEoMCwgMCwgMCwgMC4wOCkgNTAlLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDAsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgNzUlLCByZ2JhKDAsIDAsIDAsIDAuMDgpIDAsIHJnYmEoMCwgMCwgMCwgMC4wOCkpO1xuICBiYWNrZ3JvdW5kLXNpemU6IDE0LjE0cHggMTQuMTRweDtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI0QzREFFQTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDcwcHg7XG59XG4udGFnLWNvbC0tMiB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgLSA3MHB4KTtcbiAgZm9udC1zaXplOiAxM3B4O1xuICBwYWRkaW5nOiAxMHB4IDAgMTBweCAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmN2ZhO1xuICBtYXJnaW4tbGVmdDogNzBweDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnRhZy1jb2wgLnRhZy1zZWdtZW50cyB7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luOiA1cHggMjBweCA1cHggMDtcbn1cbi50YWctY29sIC50YWctc2VnbWVudHM6bnRoLWNoaWxkKDIpIGltZyB7XG4gIHdpZHRoOiAxMHB4O1xuICBoZWlnaHQ6IDEwcHg7XG59XG4udGFnLWNvbCAudGFnLXNlZ21lbnRzOm50aC1jaGlsZCgzKSBpbWcge1xuICB3aWR0aDogMjBweDtcbiAgaGVpZ2h0OiAyMHB4O1xufVxuXG4udGFnLWluZm8ge1xuICBmb250LXNpemU6IDE0cHg7XG59XG5cbi5zZXBhcmF0b3Ige1xuICBoZWlnaHQ6IDMwcHg7XG4gIG1hcmdpbjogMCAxNXB4O1xuICBib3JkZXItcmlnaHQ6IDEuNXB4IHNvbGlkO1xuICBib3JkZXItaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMjU1LCAyNTUsIDI1NSwgMCkgMCUsICM5YzljYWIgNDglLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDApIDEwMCUpO1xuICBib3JkZXItaW1hZ2Utc2xpY2U6IDE7XG59XG5cbi50YWcge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBib3gtc2hhZG93OiAwIDNweCA2cHggIzAwMDAwMDI5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuLnRhZy0tc2VsZWN0ZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBEQUM2O1xufVxuLnRhZzpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi50YWctLWgxIHtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuLnRhZy0taDIge1xuICBmb250LXdlaWdodDogNzAwO1xuICBmb250LXNpemU6IDE1cHg7XG59XG4udGFnLS1oMyB7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMTRweDtcbn1cbi50YWctLWg0IHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgZm9udC1zaXplOiAxM3B4O1xufVxuLnRhZy0tb2wsIC50YWctLXVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xufVxuXG4uaGFtYnVyZ2VyIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5iYXIxLCAuYmFyMiwgLmJhcjMge1xuICB3aWR0aDogMzVweDtcbiAgaGVpZ2h0OiA1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XG4gIG1hcmdpbjogNnB4IDA7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG5cbi5jaGFuZ2UgLmJhcjEge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZSgtOXB4LCA2cHgpO1xufVxuXG4uY2hhbmdlIC5iYXIyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxuLmNoYW5nZSAuYmFyMyB7XG4gIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLThweCwgLThweCk7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](EditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'editor',
                templateUrl: './editor.component.html',
                styleUrls: ['./editor.component.scss'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _services_tree_service__WEBPACK_IMPORTED_MODULE_7__["TreeService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"] }, { type: _directives_resizable_directive__WEBPACK_IMPORTED_MODULE_8__["ResizableDirective"] }, { type: _services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"], decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_services_storage_service__WEBPACK_IMPORTED_MODULE_6__["StorageService"]]
            }] }]; }, { divs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"],
            args: ['editableDiv']
        }], hPrimaryEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['h1']
        }], hSecondaryEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['h2']
        }], hTertiaryEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['h3']
        }], hQuaternaryEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['h4']
        }], olEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['ol']
        }], ulEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['ul']
        }], paragraphEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['paragraph']
        }], quoteEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['quote']
        }], toolbar: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['toolbar']
        }], container: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"],
            args: ['toolbarContainer', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"] }]
        }] }); })();
class Range {
    constructor(low, high, step = 1) {
        this.low = low;
        this.high = high;
        this.step = step;
    }
    *[Symbol.iterator]() {
        for (let i = this.low; i <= this.high; i += this.step) {
            yield i;
        }
    }
}
function range(low, high) {
    return new Range(low, high);
}


/***/ }),

/***/ "../ngx-infi-markdown/src/lib/_core/components/min-toolbar/min-toolbar.component.ts":
/*!******************************************************************************************!*\
  !*** ../ngx-infi-markdown/src/lib/_core/components/min-toolbar/min-toolbar.component.ts ***!
  \******************************************************************************************/
/*! exports provided: MinToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MinToolbarComponent", function() { return MinToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_tree_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/tree.service */ "../ngx-infi-markdown/src/lib/_core/services/tree.service.ts");
/* harmony import */ var _directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../directives/tooltip.directive */ "../ngx-infi-markdown/src/lib/_core/directives/tooltip.directive.ts");




const _c0 = ["h1"];
const _c1 = ["h2"];
const _c2 = ["h3"];
const _c3 = ["h4"];
const _c4 = ["paragraph"];
const _c5 = ["quote"];
const _c6 = ["ol"];
const _c7 = ["ul"];
class MinToolbarComponent {
    constructor(renderer, treeService) {
        this.renderer = renderer;
        this.treeService = treeService;
        this.onTagSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.tagsMap = new Map();
    }
    ngAfterViewInit() {
        this.tagsMap
            .set('primaryHeader', this.hPrimaryEl)
            .set('secondaryHeader', this.hSecondaryEl)
            .set('tertiaryHeader', this.hTertiaryEl)
            .set('quaternaryHeader', this.hQuaternaryEl)
            .set('orderedList', this.olEl)
            .set('unorderedList', this.ulEl)
            .set('paragraph', this.paragraphEl)
            .set('quote', this.quoteEl);
        const { tag = null } = this.treeService.getEntityRow(this.activeRow);
        if (tag) {
            this.renderer.addClass(this.tagsMap.get(tag).nativeElement, 'tag--selected');
        }
    }
    refreshView(rowData) {
        if (this.activeTag && this.activeTag !== rowData.tag) {
            this.renderer.removeClass(this.tagsMap.get(this.activeTag).nativeElement, 'tag--selected');
        }
        this.activeTag = rowData.tag;
        this.onTagSelect.next({
            tagName: this.activeTag,
            rowTagName: rowData.tag,
        });
        this.renderer.addClass(this.tagsMap.get(rowData.tag).nativeElement, 'tag--selected');
    }
    onTagSet(tagName) {
        if (!this.activeRow) {
            return;
        }
        this.activeTag = tagName;
        const { tag = null } = this.treeService.getEntityRow(this.activeRow);
        const payload = {
            rowNo: this.activeRow,
            tag: tagName,
            opName: 'setTag',
        };
        this.treeService.updateEntityTree(payload);
        if (tag) {
            this.renderer.removeClass(this.tagsMap.get(tag).nativeElement, 'tag--selected');
        }
        this.renderer.addClass(this.tagsMap.get(tagName).nativeElement, 'tag--selected');
        this.onTagSelect.next({
            tagName,
            rowTagName: tag,
        });
    }
}
MinToolbarComponent.ɵfac = function MinToolbarComponent_Factory(t) { return new (t || MinToolbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_tree_service__WEBPACK_IMPORTED_MODULE_1__["TreeService"])); };
MinToolbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MinToolbarComponent, selectors: [["min-toolbar"]], viewQuery: function MinToolbarComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c4, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c5, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c6, true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c7, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.hPrimaryEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.hSecondaryEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.hTertiaryEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.hQuaternaryEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.paragraphEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.quoteEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.olEl = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ulEl = _t.first);
    } }, inputs: { activeRow: "activeRow", activeTag: "activeTag" }, outputs: { onTagSelect: "onTagSelect" }, decls: 28, vars: 0, consts: [[1, "toolbar"], [1, "tag-segments"], [1, "tag", "tag--h1", 3, "click"], ["h1", ""], [1, "tag", "tag--h2", 3, "click"], ["h2", ""], [1, "tag", "tag--h3", 3, "click"], ["h3", ""], [1, "tag", "tag--h4", 3, "click"], ["h4", ""], [1, "tag", "tag--paragraph", 3, "click"], ["paragraph", ""], [1, "tag", "tag--quote", 3, "click"], ["quote", ""], ["src", "../../../../assets/quote.png"], ["tooltip", "Ordered list", 1, "tag", "tag--ol", 3, "click"], ["ol", ""], ["src", "../../../../assets/ordered-list.png"], ["tooltip", "Unordered list", 1, "tag", "tag--ul", 3, "click"], ["ul", ""], ["src", "../../../../assets/unordered-list.png"]], template: function MinToolbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MinToolbarComponent_Template_div_click_2_listener() { return ctx.onTagSet("primaryHeader"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MinToolbarComponent_Template_div_click_5_listener() { return ctx.onTagSet("secondaryHeader"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MinToolbarComponent_Template_div_click_8_listener() { return ctx.onTagSet("tertiaryHeader"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MinToolbarComponent_Template_div_click_11_listener() { return ctx.onTagSet("quaternaryHeader"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10, 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MinToolbarComponent_Template_div_click_15_listener() { return ctx.onTagSet("paragraph"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MinToolbarComponent_Template_div_click_18_listener() { return ctx.onTagSet("quote"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 15, 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MinToolbarComponent_Template_div_click_22_listener() { return ctx.onTagSet("orderedList"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18, 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MinToolbarComponent_Template_div_click_25_listener() { return ctx.onTagSet("unorderedList"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_2__["TooltipDirective"]], styles: [".toolbar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  font-size: 13px;\n  padding: 10px 0 10px 15px;\n  background-color: #f4f7fa;\n}\n\n.tag-segments[_ngcontent-%COMP%] {\n  height: 50px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n}\n\n.tag-segments[_ngcontent-%COMP%]:nth-child(2)   img[_ngcontent-%COMP%] {\n  width: 10px;\n  height: 10px;\n}\n\n.tag-segments[_ngcontent-%COMP%]:nth-child(3)   img[_ngcontent-%COMP%] {\n  width: 20px;\n  height: 20px;\n}\n\n.tag[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  border: 1px solid black;\n  margin-right: 10px;\n  box-shadow: 0 3px 6px #00000029;\n  background-color: #fff;\n}\n\n.tag--selected[_ngcontent-%COMP%] {\n  background-color: #00DAC6;\n}\n\n.tag[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.tag--h1[_ngcontent-%COMP%] {\n  font-weight: 800;\n  font-size: 17px;\n}\n\n.tag--h2[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 16px;\n}\n\n.tag--h3[_ngcontent-%COMP%] {\n  font-weight: 600;\n  font-size: 15px;\n}\n\n.tag--h4[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 14px;\n}\n\n.tag--ol[_ngcontent-%COMP%], .tag--ul[_ngcontent-%COMP%] {\n  font-size: 12px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zb2Jlay9Qcm9qZWN0cy9uZ3gtaW5maS1tYXJrZG93bi9wcm9qZWN0cy9uZ3gtaW5maS1tYXJrZG93bi9zcmMvbGliL19jb3JlL2NvbXBvbmVudHMvbWluLXRvb2xiYXIvbWluLXRvb2xiYXIuY29tcG9uZW50LnNjc3MiLCJwcm9qZWN0cy9uZ3gtaW5maS1tYXJrZG93bi9zcmMvbGliL19jb3JlL2NvbXBvbmVudHMvbWluLXRvb2xiYXIvbWluLXRvb2xiYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDUjs7QURFSTtFQUNJLFdBQUE7RUFDQSxZQUFBO0FDQVI7O0FESUE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLHNCQUFBO0FDREo7O0FER0k7RUFDSSx5QkFBQTtBQ0RSOztBRElJO0VBQ0ksZUFBQTtBQ0ZSOztBREtJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDSFI7O0FETUk7RUFDSSxnQkFBQTtFQUNBLGVBQUE7QUNKUjs7QURPSTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtBQ0xSOztBRFFJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FDTlI7O0FEU0k7RUFDSSxlQUFBO0FDUFIiLCJmaWxlIjoicHJvamVjdHMvbmd4LWluZmktbWFya2Rvd24vc3JjL2xpYi9fY29yZS9jb21wb25lbnRzL21pbi10b29sYmFyL21pbi10b29sYmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvb2xiYXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmb250LXNpemU6IDEzcHg7XG4gICAgcGFkZGluZzogMTBweCAwIDEwcHggMTVweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjQ0LCAyNDcsIDI1MCk7XG59XG5cbi50YWctc2VnbWVudHMge1xuICAgIGhlaWdodDogNTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICAgICY6bnRoLWNoaWxkKDIpIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMHB4O1xuICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgfVxuXG4gICAgJjpudGgtY2hpbGQoMykgaW1nIHtcbiAgICAgICAgd2lkdGg6IDIwcHg7XG4gICAgICAgIGhlaWdodDogMjBweDtcbiAgICB9XG59XG5cbi50YWcge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCAjMDAwMDAwMjk7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcblxuICAgICYtLXNlbGVjdGVkIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwREFDNjtcbiAgICB9XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cblxuICAgICYtLWgxIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICAgICAgZm9udC1zaXplOiAxN3B4O1xuICAgIH1cblxuICAgICYtLWgyIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgIH1cblxuICAgICYtLWgzIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgIH1cblxuICAgICYtLWg0IHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgIH1cblxuICAgICYtLW9sLCAmLS11bCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICB9XG59XG4iLCIudG9vbGJhciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAxMDAlO1xuICBmb250LXNpemU6IDEzcHg7XG4gIHBhZGRpbmc6IDEwcHggMCAxMHB4IDE1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY3ZmE7XG59XG5cbi50YWctc2VnbWVudHMge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udGFnLXNlZ21lbnRzOm50aC1jaGlsZCgyKSBpbWcge1xuICB3aWR0aDogMTBweDtcbiAgaGVpZ2h0OiAxMHB4O1xufVxuLnRhZy1zZWdtZW50czpudGgtY2hpbGQoMykgaW1nIHtcbiAgd2lkdGg6IDIwcHg7XG4gIGhlaWdodDogMjBweDtcbn1cblxuLnRhZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMzBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gIGJveC1zaGFkb3c6IDAgM3B4IDZweCAjMDAwMDAwMjk7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG4udGFnLS1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMwMERBQzY7XG59XG4udGFnOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLnRhZy0taDEge1xuICBmb250LXdlaWdodDogODAwO1xuICBmb250LXNpemU6IDE3cHg7XG59XG4udGFnLS1oMiB7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIGZvbnQtc2l6ZTogMTZweDtcbn1cbi50YWctLWgzIHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxNXB4O1xufVxuLnRhZy0taDQge1xuICBmb250LXdlaWdodDogNTAwO1xuICBmb250LXNpemU6IDE0cHg7XG59XG4udGFnLS1vbCwgLnRhZy0tdWwge1xuICBmb250LXNpemU6IDEycHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MinToolbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'min-toolbar',
                templateUrl: './min-toolbar.component.html',
                styleUrls: ['./min-toolbar.component.scss'],
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _services_tree_service__WEBPACK_IMPORTED_MODULE_1__["TreeService"] }]; }, { activeRow: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], activeTag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onTagSelect: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], hPrimaryEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['h1']
        }], hSecondaryEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['h2']
        }], hTertiaryEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['h3']
        }], hQuaternaryEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['h4']
        }], paragraphEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['paragraph']
        }], quoteEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['quote']
        }], olEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['ol']
        }], ulEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['ul']
        }] }); })();


/***/ }),

/***/ "../ngx-infi-markdown/src/lib/_core/components/preview/preview.component.ts":
/*!**********************************************************************************!*\
  !*** ../ngx-infi-markdown/src/lib/_core/components/preview/preview.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewComponent", function() { return PreviewComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _services_tree_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/tree.service */ "../ngx-infi-markdown/src/lib/_core/services/tree.service.ts");
/* harmony import */ var _pipes_sanitizeHtml_pipe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pipes/sanitizeHtml.pipe */ "../ngx-infi-markdown/src/lib/_core/pipes/sanitizeHtml.pipe.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





class PreviewComponent {
    constructor(treeService) {
        this.treeService = treeService;
        this.content$ = this.treeService.contentOb$;
    }
    ngOnInit() { }
}
PreviewComponent.ɵfac = function PreviewComponent_Factory(t) { return new (t || PreviewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_tree_service__WEBPACK_IMPORTED_MODULE_1__["TreeService"])); };
PreviewComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PreviewComponent, selectors: [["preview"]], decls: 3, vars: 5, consts: [[1, "preview", 3, "innerHtml"]], template: function PreviewComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "sanitizeHtml");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx.content$)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, pipes: [_pipes_sanitizeHtml_pipe__WEBPACK_IMPORTED_MODULE_2__["SanitizeHtmlPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"]], styles: [".preview[_ngcontent-%COMP%] {\n  padding-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zb2Jlay9Qcm9qZWN0cy9uZ3gtaW5maS1tYXJrZG93bi9wcm9qZWN0cy9uZ3gtaW5maS1tYXJrZG93bi9zcmMvbGliL19jb3JlL2NvbXBvbmVudHMvcHJldmlldy9wcmV2aWV3LmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbmd4LWluZmktbWFya2Rvd24vc3JjL2xpYi9fY29yZS9jb21wb25lbnRzL3ByZXZpZXcvcHJldmlldy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0FDQ0oiLCJmaWxlIjoicHJvamVjdHMvbmd4LWluZmktbWFya2Rvd24vc3JjL2xpYi9fY29yZS9jb21wb25lbnRzL3ByZXZpZXcvcHJldmlldy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcmV2aWV3IHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbn0iLCIucHJldmlldyB7XG4gIHBhZGRpbmctdG9wOiAzMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PreviewComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'preview',
                templateUrl: './preview.component.html',
                styleUrls: ['./preview.component.scss'],
            }]
    }], function () { return [{ type: _services_tree_service__WEBPACK_IMPORTED_MODULE_1__["TreeService"] }]; }, null); })();


/***/ }),

/***/ "../ngx-infi-markdown/src/lib/_core/components/tooltip/tooltip.component.ts":
/*!**********************************************************************************!*\
  !*** ../ngx-infi-markdown/src/lib/_core/components/tooltip/tooltip.component.ts ***!
  \**********************************************************************************/
/*! exports provided: TooltipComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipComponent", function() { return TooltipComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");



const _c0 = ["container"];
const _c1 = function (a0, a1) { return { top: a0, left: a1 }; };
const _c2 = ["*"];
class TooltipComponent {
    constructor(config) {
        this.config = config;
    }
    ngOnInit() {
        const { offsetTop, offsetLeft } = this.config.host;
        const { clientHeight } = this.containerEl.nativeElement;
        const spaceUp = Math.min(clientHeight, 30);
        this.top = `${offsetTop - spaceUp - 8}px`;
        this.left = `${offsetLeft}px`;
    }
}
TooltipComponent.ɵfac = function TooltipComponent_Factory(t) { return new (t || TooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"]('tooltipConfig')); };
TooltipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TooltipComponent, selectors: [["ng-component"]], viewQuery: function TooltipComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerEl = _t.first);
    } }, ngContentSelectors: _c2, decls: 3, vars: 4, consts: [[1, "tooltip-container", 3, "ngStyle"], ["container", ""]], template: function TooltipComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](1, _c1, ctx.top, ctx.left));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgStyle"]], styles: [".tooltip-container[_ngcontent-%COMP%] {\n  position: absolute;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  border-radius: 6px;\n  padding: 8px;\n  z-index: 999;\n  min-width: 100px;\n}\n.tooltip-container[_ngcontent-%COMP%]::before {\n  content: \" \";\n  position: absolute;\n  top: 100%;\n  left: 15px;\n  margin-left: -5px;\n  border-width: 5px;\n  border-style: solid;\n  border-color: black transparent transparent transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zb2Jlay9Qcm9qZWN0cy9uZ3gtaW5maS1tYXJrZG93bi9wcm9qZWN0cy9uZ3gtaW5maS1tYXJrZG93bi9zcmMvbGliL19jb3JlL2NvbXBvbmVudHMvdG9vbHRpcC90b29sdGlwLmNvbXBvbmVudC5zY3NzIiwicHJvamVjdHMvbmd4LWluZmktbWFya2Rvd24vc3JjL2xpYi9fY29yZS9jb21wb25lbnRzL3Rvb2x0aXAvdG9vbHRpcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUNDSjtBRENJO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1REFBQTtBQ0NSIiwiZmlsZSI6InByb2plY3RzL25neC1pbmZpLW1hcmtkb3duL3NyYy9saWIvX2NvcmUvY29tcG9uZW50cy90b29sdGlwL3Rvb2x0aXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9vbHRpcC1jb250YWluZXIgeyBcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7IFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiA2cHg7XG4gICAgcGFkZGluZzogOHB4O1xuICAgIHotaW5kZXg6IDk5OTtcbiAgICBtaW4td2lkdGg6IDEwMHB4O1xuXG4gICAgJjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCIgXCI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAxMDAlO1xuICAgICAgICBsZWZ0OiAxNXB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTVweDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiA1cHg7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogYmxhY2sgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gICAgfVxufSIsIi50b29sdGlwLWNvbnRhaW5lciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiAjZmZmO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgcGFkZGluZzogOHB4O1xuICB6LWluZGV4OiA5OTk7XG4gIG1pbi13aWR0aDogMTAwcHg7XG59XG4udG9vbHRpcC1jb250YWluZXI6OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiIFwiO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTAwJTtcbiAgbGVmdDogMTVweDtcbiAgbWFyZ2luLWxlZnQ6IC01cHg7XG4gIGJvcmRlci13aWR0aDogNXB4O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItY29sb3I6IGJsYWNrIHRyYW5zcGFyZW50IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: `
    <div #container class="tooltip-container" [ngStyle]="{ top: top, left: left }">
      <ng-content></ng-content>
    </div>
  `,
                styleUrls: ['./tooltip.component.scss'],
            }]
    }], function () { return [{ type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: ['tooltipConfig']
            }] }]; }, { containerEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['container', { static: true }]
        }] }); })();


/***/ }),

/***/ "../ngx-infi-markdown/src/lib/_core/configs/index.ts":
/*!***********************************************************!*\
  !*** ../ngx-infi-markdown/src/lib/_core/configs/index.ts ***!
  \***********************************************************/
/*! exports provided: USER_STYLE_CONFIG */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USER_STYLE_CONFIG", function() { return USER_STYLE_CONFIG; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

const USER_STYLE_CONFIG = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('User Style Config');


/***/ }),

/***/ "../ngx-infi-markdown/src/lib/_core/directives/resizable.directive.ts":
/*!****************************************************************************!*\
  !*** ../ngx-infi-markdown/src/lib/_core/directives/resizable.directive.ts ***!
  \****************************************************************************/
/*! exports provided: ResizableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResizableDirective", function() { return ResizableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ResizableDirective {
    constructor(el) {
        this.el = el;
        this.resizableGrabWidth = 2;
        this.resizableMinWidth = 100;
        this.onWidthChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dragging = false;
        this.containerWidth = this.el.nativeElement.clientWidth;
    }
    ngOnInit() {
        this.windowWidth = window.innerWidth;
        this.el.nativeElement.style['border-right'] = this.resizableGrabWidth + 'px dashed #D3DAEA';
    }
    onResize(event) {
        this.windowWidth = window.innerWidth;
        this.setWidth(this.windowWidth / 2 - this.el.nativeElement.offsetLeft);
    }
    onDrag(event) {
        if (!this.dragging) {
            return;
        }
        if (this.containerWidth < event.clientX) {
            return;
        }
        this.setWidth(event.clientX - this.el.nativeElement.offsetLeft);
        event.stopPropagation();
    }
    onMouseUp(event) {
        if (!this.dragging) {
            return;
        }
        this.dragging = false;
        event.stopPropagation();
    }
    onMouseDown(event) {
        if (this.isInDragRegion(event)) {
            this.dragging = true;
            event.stopPropagation();
        }
    }
    onMouseMove(event) {
        if (this.isInDragRegion(event) || this.dragging) {
            this.el.nativeElement.style.cursor = 'col-resize';
        }
        else {
            this.el.nativeElement.style.cursor = 'default';
        }
    }
    setWidth(width) {
        const newWidth = Math.max(this.resizableMinWidth, width);
        const percWidth = (newWidth / this.windowWidth) * 100;
        this.el.nativeElement.style.width = percWidth + '%';
        this.onWidthChange.emit({ percWidth, pxWidth: width });
    }
    isInDragRegion(evt) {
        return this.el.nativeElement.clientWidth - evt.clientX + this.el.nativeElement.offsetLeft < this.resizableGrabWidth;
    }
}
ResizableDirective.ɵfac = function ResizableDirective_Factory(t) { return new (t || ResizableDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])); };
ResizableDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: ResizableDirective, selectors: [["", "appResizable", ""]], hostBindings: function ResizableDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function ResizableDirective_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"])("mousemove", function ResizableDirective_mousemove_HostBindingHandler($event) { return ctx.onDrag($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("mouseup", function ResizableDirective_mouseup_HostBindingHandler($event) { return ctx.onMouseUp($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveDocument"])("mousedown", function ResizableDirective_mousedown_HostBindingHandler($event) { return ctx.onMouseDown($event); })("mousemove", function ResizableDirective_mousemove_HostBindingHandler($event) { return ctx.onMouseMove($event); });
    } }, inputs: { resizableGrabWidth: "resizableGrabWidth", resizableMinWidth: "resizableMinWidth" }, outputs: { onWidthChange: "onWidthChange" }, exportAs: ["appResizable"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResizableDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[appResizable]',
                exportAs: 'appResizable',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }]; }, { resizableGrabWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], resizableMinWidth: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], onWidthChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
        }], onDrag: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mousemove', ['$event']]
        }], onMouseUp: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['document:mouseup', ['$event']]
        }], onMouseDown: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousedown', ['$event']]
        }], onMouseMove: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mousemove', ['$event']]
        }] }); })();


/***/ }),

/***/ "../ngx-infi-markdown/src/lib/_core/directives/tooltip.directive.ts":
/*!**************************************************************************!*\
  !*** ../ngx-infi-markdown/src/lib/_core/directives/tooltip.directive.ts ***!
  \**************************************************************************/
/*! exports provided: TooltipDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TooltipDirective", function() { return TooltipDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/tooltip/tooltip.component */ "../ngx-infi-markdown/src/lib/_core/components/tooltip/tooltip.component.ts");



class TooltipDirective {
    constructor(el, injector, renderer, vcr, resolver) {
        this.el = el;
        this.injector = injector;
        this.renderer = renderer;
        this.vcr = vcr;
        this.resolver = resolver;
    }
    ngOnDestroy() {
        this.destroy();
    }
    onHover() {
        if (this.componentRef) {
            return;
        }
        const factory = this.resolver.resolveComponentFactory(_components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_1__["TooltipComponent"]);
        const injector = _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"].create({
            providers: [
                {
                    provide: 'tooltipConfig',
                    useValue: {
                        host: this.el.nativeElement,
                    },
                },
            ],
        });
        this.componentRef = this.vcr.createComponent(factory, 0, injector, this.generateContent());
    }
    onMouseLeave() {
        this.destroy();
    }
    generateContent() {
        if (Object.prototype.toString.call(this.content) === '[object String]') {
            const element = this.renderer.createText(this.content);
            return [[element]];
        }
        else if (this.content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]) {
            const context = {};
            const viewRef = this.content.createEmbeddedView(context);
            return [viewRef.rootNodes];
        }
        else {
            const factory = this.resolver.resolveComponentFactory(this.content);
            const componentRef = factory.create(this.injector);
            return [[componentRef.location.nativeElement]];
        }
    }
    destroy() {
        this.componentRef && this.componentRef.destroy();
        this.componentRef = null;
    }
}
TooltipDirective.ɵfac = function TooltipDirective_Factory(t) { return new (t || TooltipDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"])); };
TooltipDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: TooltipDirective, selectors: [["", "tooltip", ""]], hostBindings: function TooltipDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mouseenter", function TooltipDirective_mouseenter_HostBindingHandler() { return ctx.onHover(); })("mouseout", function TooltipDirective_mouseout_HostBindingHandler() { return ctx.onMouseLeave(); });
    } }, inputs: { content: ["tooltip", "content"] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TooltipDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[tooltip]',
            }]
    }], function () { return [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"],
            args: ['tooltip']
        }], onHover: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseenter']
        }], onMouseLeave: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['mouseout']
        }] }); })();


/***/ }),

/***/ "../ngx-infi-markdown/src/lib/_core/pipes/sanitizeHtml.pipe.ts":
/*!*********************************************************************!*\
  !*** ../ngx-infi-markdown/src/lib/_core/pipes/sanitizeHtml.pipe.ts ***!
  \*********************************************************************/
/*! exports provided: SanitizeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SanitizeHtmlPipe", function() { return SanitizeHtmlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class SanitizeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(content) {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    }
}
SanitizeHtmlPipe.ɵfac = function SanitizeHtmlPipe_Factory(t) { return new (t || SanitizeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SanitizeHtmlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "sanitizeHtml", type: SanitizeHtmlPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SanitizeHtmlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'sanitizeHtml',
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "../ngx-infi-markdown/src/lib/_core/services/storage.service.ts":
/*!**********************************************************************!*\
  !*** ../ngx-infi-markdown/src/lib/_core/services/storage.service.ts ***!
  \**********************************************************************/
/*! exports provided: SessionStorageService, LocalStorageService, StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionStorageService", function() { return SessionStorageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocalStorageService", function() { return LocalStorageService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SessionStorageService {
    getItem(key) {
        return JSON.parse(sessionStorage.getItem(key));
    }
    setItem(key, value) {
        return sessionStorage.setItem(key, JSON.stringify(value));
    }
    removeItem(key) {
        return sessionStorage.removeItem(key);
    }
}
SessionStorageService.ɵfac = function SessionStorageService_Factory(t) { return new (t || SessionStorageService)(); };
SessionStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SessionStorageService, factory: SessionStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SessionStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
class LocalStorageService {
    getItem(key) {
        return JSON.parse(localStorage.getItem(key));
    }
    setItem(key, value) {
        return localStorage.setItem(key, JSON.stringify(value));
    }
    removeItem(key) {
        return localStorage.removeItem(key);
    }
}
LocalStorageService.ɵfac = function LocalStorageService_Factory(t) { return new (t || LocalStorageService)(); };
LocalStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: LocalStorageService, factory: LocalStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
class StorageService {
}
StorageService.ɵfac = function StorageService_Factory(t) { return new (t || StorageService)(); };
StorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StorageService, factory: StorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], null, null); })();


/***/ }),

/***/ "../ngx-infi-markdown/src/lib/_core/services/tree.service.ts":
/*!*******************************************************************!*\
  !*** ../ngx-infi-markdown/src/lib/_core/services/tree.service.ts ***!
  \*******************************************************************/
/*! exports provided: defaultStyles, TreeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultStyles", function() { return defaultStyles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TreeService", function() { return TreeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils */ "../ngx-infi-markdown/src/lib/_core/utils/index.ts");





const defaultStyles = {
    primaryHeader: {
        htmlTag: 'h1',
        styles: {
            'font-size': '72px',
            'letter-spacing': '.42px',
            'font-weight': '600',
        },
    },
    secondaryHeader: {
        htmlTag: 'h2',
        styles: {
            'font-size': '32px',
            'letter-spacing': '.42px',
            'font-weight': '400',
        },
    },
    tertiaryHeader: {
        htmlTag: 'h3',
        styles: {
            'font-size': '32px',
            'letter-spacing': '.42px',
            'font-weight': '400',
        },
    },
    quaternaryHeader: {
        htmlTag: 'h4',
        styles: {
            'font-size': '25px',
            'letter-spacing': '.42px',
            'font-weight': '400',
        },
    },
    orderedList: {
        htmlTag: 'li',
        parentHtmlTag: 'ol',
        styles: {
            'font-size': '21px',
            'letter-spacing': '.42px',
            'font-weight': '400',
            'list-style-type': 'decimal',
            'list-style-position': 'inside',
        },
    },
    unorderedList: {
        htmlTag: 'li',
        parentHtmlTag: 'ul',
        styles: {
            'font-size': '21px',
            'letter-spacing': '.42px',
            'font-weight': '400',
            'list-style-type': 'disc',
            'list-style-position': 'inside',
        },
    },
    paragraph: {
        htmlTag: 'p',
        styles: {
            'font-size': '21px',
            'letter-spacing': '.84px',
        },
    },
    quote: {
        htmlTag: 'div',
        styles: {
            'font-style': 'italic',
            'font-size': '24px',
            color: '#000',
            'text-align': 'left',
            'border-left': '1px solid #000',
            padding: '15px 25px',
        },
    },
};
const defaultEntities = [
    {
        rowNo: 1,
        text: '',
        tag: 'paragraph',
        htmlContent: '',
    },
    {
        rowNo: 2,
        text: '',
        tag: 'paragraph',
        htmlContent: '',
    },
    {
        rowNo: 3,
        text: '',
        tag: 'paragraph',
        htmlContent: '',
    },
    {
        rowNo: 4,
        text: '',
        tag: 'paragraph',
        htmlContent: '',
    },
    {
        rowNo: 5,
        text: '',
        tag: 'paragraph',
        htmlContent: '',
    },
];
class TreeService {
    constructor() {
        this.content$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.contentOb$ = this.content$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
        this.toggleStyles$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.toggleStylesObs$ = this.toggleStyles$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])());
        this.entity$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.listenForStyleChange();
    }
    listenForStyleChange() {
        this.entity$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])((entity) => {
            const _entity = entity ? entity : defaultEntities;
            this.setEntityTree(_entity);
            return this.toggleStylesObs$;
        })).subscribe((state) => {
            this.setStyles(state);
            this.rebuildAllSegments();
            this.content$.next(this.buildView());
        });
    }
    setStyles(loadCustomStyles = false) {
        const styles = Object(_utils__WEBPACK_IMPORTED_MODULE_3__["objectCloneDeep"])(defaultStyles);
        if (loadCustomStyles) {
            if (this.userStyles != null && this.userStyles.constructor.name === 'Object') {
                for (const [key, style] of Object.entries(styles)) {
                    style.styles = Object.assign(Object.assign({}, style.styles), this.pickStyles(this.userStyles[key]));
                }
            }
            else {
                console.warn(`[infi-markdown] Empty or invalid style model provided.`);
            }
        }
        this.styles = styles;
    }
    setUserStyles(userStyles, shouldOverride) {
        if (this.isGlobalConfig) {
            return;
        }
        if (shouldOverride) {
            this.isGlobalConfig = true;
        }
        this.userStyles = userStyles;
    }
    setEntityTree(entity) {
        this.entityTree = entity;
    }
    get entity() {
        return this.entityTree;
    }
    get entityValues() {
        return this.entityTree.map((entity) => entity.text);
    }
    get typed() {
        return this.entityTree.some(({ text }) => text);
    }
    updateRowNos(index) {
        for (const entity of this.entityTree.slice(index)) {
            entity.rowNo = ++index;
        }
    }
    getEntityRow(key) {
        const singleRow = this.entityTree[key - 1];
        if (!singleRow) {
            return null;
        }
        return singleRow;
    }
    insertEntityRow(rowNo, rows) {
        this.entityTree.splice(rowNo - 1, 1, ...rows);
        for (const row of rows) {
            this.updateEntityTree(Object.assign(Object.assign({}, row), { opName: 'addText' }));
        }
        this.updateRowNos(rowNo - 1);
    }
    removeEntityRow(rowNo, textToAppend) {
        this.entityTree.splice(rowNo - 1, 1);
        const upperEntity = this.entityTree[rowNo - 2];
        upperEntity.text += textToAppend;
        this.updateEntityTree(Object.assign(Object.assign({}, upperEntity), { opName: 'addText' }));
        this.updateRowNos(rowNo - 1);
    }
    updateEntityTree(payload) {
        const { rowNo, text = null, tag = 'paragraph', opName } = payload;
        if (!this.entityTree[rowNo - 1]) {
            this.entityTree[rowNo - 1] = {
                rowNo,
                text,
                tag,
                htmlContent: this.createSegment(text, tag, rowNo - 1),
            };
        }
        else {
            let { text: currentText, tag: currentTag } = this.entityTree[rowNo - 1];
            currentText = opName === 'addText' ? text : currentText;
            currentTag = opName === 'setTag' ? tag : currentTag;
            this.entityTree[rowNo - 1] = Object.assign(Object.assign({}, this.entityTree[rowNo - 1]), { text: currentText, tag: currentTag, htmlContent: this.createSegment(currentText, currentTag, rowNo - 1) });
        }
        if (tag === 'orderedList' || tag === 'unorderedList') {
            this.rebuildAllSegments();
        }
        this.content$.next(this.buildView());
    }
    loadEntity(entity) {
        this.entity$.next(entity);
    }
    toggleStyles(state) {
        this.toggleStyles$.next(state);
    }
    rebuildAllSegments() {
        this.entityTree.forEach((entity, index) => {
            entity.htmlContent = this.createSegment(entity.text, entity.tag, index);
        });
    }
    buildView() {
        let html = '<div style="padding: 15px 50px">';
        for (const entity of this.entityTree) {
            const _content = (entity === null || entity === void 0 ? void 0 : entity.htmlContent) || '';
            html += _content;
        }
        html += '</div>';
        return html;
    }
    createSegment(text, tag, index) {
        let segment = '';
        const { htmlTag, styles, parentHtmlTag = 'div' } = this.styles[tag];
        const listElementType = this.checkListType(tag, index);
        segment += listElementType.includes('middle') ? '' : '<div style="margin: 25px 0">';
        segment += listElementType.includes('first') ? `<${parentHtmlTag} style="margin: 25px 0">` : '';
        segment += `<${htmlTag} style="${this.injectInlineStyles(styles)}">${text}</${htmlTag}>`;
        segment += listElementType.includes('last') ? `</${parentHtmlTag}>` : '';
        segment += listElementType.includes('middle') ? '' : '</div>';
        return segment;
    }
    checkListType(tag, entityTreeIndex) {
        var _a, _b;
        const attributes = [];
        if (!['orderedList', 'unorderedList'].includes(tag)) {
            return attributes;
        }
        attributes.push('middle');
        ((_a = this.entityTree[entityTreeIndex - 1]) === null || _a === void 0 ? void 0 : _a.tag) !== tag && attributes.push('first');
        ((_b = this.entityTree[entityTreeIndex + 1]) === null || _b === void 0 ? void 0 : _b.tag) !== tag && attributes.push('last');
        return attributes;
    }
    injectInlineStyles(styles) {
        if (!styles || !Object.keys(styles).length) {
            return '';
        }
        return Object.entries(styles)
            .map(([k, v]) => `${k}: ${v}`)
            .join(';');
    }
    pickStyles(styles) {
        if (!styles) {
            return {};
        }
        const sanitizedStyles = {};
        for (const key of Object.keys(styles)) {
            const properKey = key.replace(/[A-Z]/g, (m) => '-' + m.toLowerCase());
            if (['[object String]', '[object Number]'].includes(Object.prototype.toString.call(styles[key]))) {
                sanitizedStyles[properKey] = styles[key];
            }
            else if (key === 'fontFamily' && Array.isArray(styles[key])) {
                sanitizedStyles[properKey] = styles[key]
                    .filter((font) => Object.prototype.toString.call(font) === '[object String]')
                    .map((str) => {
                    if (/\s/.test(str)) {
                        return `'${str}'`;
                    }
                    return str;
                })
                    .join(', ');
            }
        }
        return sanitizedStyles;
    }
}
TreeService.ɵfac = function TreeService_Factory(t) { return new (t || TreeService)(); };
TreeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TreeService, factory: TreeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TreeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "../ngx-infi-markdown/src/lib/_core/utils/index.ts":
/*!*********************************************************!*\
  !*** ../ngx-infi-markdown/src/lib/_core/utils/index.ts ***!
  \*********************************************************/
/*! exports provided: getCaretPosition, setCaretAtPosition, findAllOccurrencesOfPattern, calculateCorrection, calculateCaretPosition, objectCloneDeep, match */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCaretPosition", function() { return getCaretPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCaretAtPosition", function() { return setCaretAtPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findAllOccurrencesOfPattern", function() { return findAllOccurrencesOfPattern; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateCorrection", function() { return calculateCorrection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calculateCaretPosition", function() { return calculateCaretPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectCloneDeep", function() { return objectCloneDeep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "match", function() { return match; });
function node_walk(node, func) {
    let result = func(node);
    for (node = node.firstChild; result !== false && node; node = node.nextSibling)
        result = node_walk(node, func);
    return result;
}
function getCaretPosition(elem) {
    const sel = window.getSelection();
    let cum_length = [0, 0];
    if (sel.anchorNode == elem)
        cum_length = [sel.anchorOffset, sel.extentOffset];
    else {
        const nodes_to_find = [sel.anchorNode, sel.extentNode];
        if (!elem.contains(sel.anchorNode) /* || !elem.contains(sel.extentNode)*/)
            return undefined;
        else {
            let found = [0, 0];
            let i;
            node_walk(elem, function (node) {
                for (i = 0; i < 2; i++) {
                    if (node == nodes_to_find[i]) {
                        found[i] = true;
                        if (found[i == 0 ? 1 : 0])
                            return false;
                    }
                }
                if (node.textContent && !node.firstChild) {
                    for (i = 0; i < 2; i++) {
                        if (!found[i])
                            cum_length[i] += node.textContent.length;
                    }
                }
            });
            cum_length[0] += sel.anchorOffset;
            cum_length[1] += sel.extentOffset;
        }
    }
    if (cum_length[0] <= cum_length[1])
        return cum_length;
    return [cum_length[1], cum_length[0]];
}
function setCaretAtPosition(cp, element) {
    const caretPosition = Math.min(cp, element.nodeValue.length);
    const range = document.createRange();
    range.setStart(element, caretPosition);
    range.setEnd(element, caretPosition);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
}
function findAllOccurrencesOfPattern(str, pattern) {
    const indexes = [];
    for (let i = str.indexOf(pattern); i > -1; i = str.indexOf(pattern, i + 1)) {
        indexes.push(i);
    }
    return indexes;
}
function calculateCorrection(caretPosition, indexes, patternLength) {
    let finish = false;
    let i = 0;
    while (!finish) {
        if (!indexes[i] || indexes[i] - i * patternLength >= caretPosition) {
            finish = true;
        }
        else {
            i++;
        }
    }
    return i;
}
function calculateCaretPosition(div, ind) {
    let i = ind;
    let cp = 0;
    while (div.childNodes[i] && div.childNodes[i].nodeType === Node.TEXT_NODE) {
        cp += div.childNodes[i].nodeValue.length;
        i++;
    }
    return cp;
}
/**
 * Deep cloning for objects, default JS behavior for the rest of types
 * @param obj: T
 * @returns T
 */
function objectCloneDeep(obj) {
    const result = {};
    for (const [key, value] of Object.entries(obj)) {
        if (Object.prototype.toString.call(value) === '[object Object]') {
            result[key] = objectCloneDeep(value);
        }
        else {
            result[key] = value;
        }
    }
    return result;
}
function matched(x) {
    return {
        on: () => matched(x),
        otherwise: () => x,
    };
}
function match(x) {
    return {
        on: (pred, fn) => (pred(x) ? matched(fn(x)) : match(x)),
        otherwise: (fn) => fn(x),
    };
}


/***/ }),

/***/ "../ngx-infi-markdown/src/lib/ngx-infi-markdown.component.ts":
/*!*******************************************************************!*\
  !*** ../ngx-infi-markdown/src/lib/ngx-infi-markdown.component.ts ***!
  \*******************************************************************/
/*! exports provided: NgxInfiMarkdownComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxInfiMarkdownComponent", function() { return NgxInfiMarkdownComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_configs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_core/configs */ "../ngx-infi-markdown/src/lib/_core/configs/index.ts");
/* harmony import */ var _core_services_tree_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_core/services/tree.service */ "../ngx-infi-markdown/src/lib/_core/services/tree.service.ts");
/* harmony import */ var _core_components_editor_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_core/components/editor/editor.component */ "../ngx-infi-markdown/src/lib/_core/components/editor/editor.component.ts");
/* harmony import */ var _core_directives_resizable_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_core/directives/resizable.directive */ "../ngx-infi-markdown/src/lib/_core/directives/resizable.directive.ts");
/* harmony import */ var _core_components_preview_preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./_core/components/preview/preview.component */ "../ngx-infi-markdown/src/lib/_core/components/preview/preview.component.ts");







class NgxInfiMarkdownComponent {
    constructor(treeService, styleConfig) {
        this.treeService = treeService;
        styleConfig && this.treeService.setUserStyles(styleConfig, true);
    }
    set styles(value) {
        this.treeService.setUserStyles(value, false);
    }
    ngOnInit() { }
    handleWidthChange(event) {
        const { percWidth } = event;
        this.previewWidth = 100 - percWidth + '%';
    }
    toggleStyles(event) {
        const status = event.target.checked;
        this.treeService.toggleStyles(status);
    }
}
NgxInfiMarkdownComponent.ɵfac = function NgxInfiMarkdownComponent_Factory(t) { return new (t || NgxInfiMarkdownComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_tree_service__WEBPACK_IMPORTED_MODULE_2__["TreeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_configs__WEBPACK_IMPORTED_MODULE_1__["USER_STYLE_CONFIG"], 8)); };
NgxInfiMarkdownComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NgxInfiMarkdownComponent, selectors: [["ngx-infi-markdown"]], inputs: { styles: "styles" }, decls: 8, vars: 3, consts: [[1, "row"], ["appResizable", "", 1, "child", 3, "resizableMinWidth", "onWidthChange"], ["appResizable", "appResizable"], [1, "child"], [1, "switcher"], [1, "switch"], ["type", "checkbox", 3, "change"], [1, "slider", "round"]], template: function NgxInfiMarkdownComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "editor", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onWidthChange", function NgxInfiMarkdownComponent_Template_editor_onWidthChange_1_listener($event) { return ctx.handleWidthChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "preview", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function NgxInfiMarkdownComponent_Template_input_change_6_listener($event) { return ctx.toggleStyles($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("resizableMinWidth", 250);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.previewWidth);
    } }, directives: [_core_components_editor_editor_component__WEBPACK_IMPORTED_MODULE_3__["EditorComponent"], _core_directives_resizable_directive__WEBPACK_IMPORTED_MODULE_4__["ResizableDirective"], _core_components_preview_preview_component__WEBPACK_IMPORTED_MODULE_5__["PreviewComponent"]], styles: ["/*! normalize.css v8.0.1 | MIT License | github.com/necolas/normalize.css */\n/* Document\n   ========================================================================== */\n/**\n * 1. Correct the line height in all browsers.\n * 2. Prevent adjustments of font size after orientation changes in iOS.\n */\nhtml {\n  line-height: 1.15;\n  /* 1 */\n  -webkit-text-size-adjust: 100%;\n  /* 2 */\n}\n/* Sections\n   ========================================================================== */\n/**\n * Remove the margin in all browsers.\n */\nbody {\n  margin: 0;\n}\n/**\n * Render the `main` element consistently in IE.\n */\nmain {\n  display: block;\n}\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n/* Grouping content\n   ========================================================================== */\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\nhr {\n  box-sizing: content-box;\n  /* 1 */\n  height: 0;\n  /* 1 */\n  overflow: visible;\n  /* 2 */\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\npre {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n/* Text-level semantics\n   ========================================================================== */\n/**\n * Remove the gray background on active links in IE 10.\n */\na {\n  background-color: transparent;\n}\n/**\n * 1. Remove the bottom border in Chrome 57-\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\nabbr[title] {\n  border-bottom: none;\n  /* 1 */\n  text-decoration: underline;\n  /* 2 */\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n  /* 2 */\n}\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\nb,\nstrong {\n  font-weight: bolder;\n}\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n  /* 1 */\n  font-size: 1em;\n  /* 2 */\n}\n/**\n * Add the correct font size in all browsers.\n */\nsmall {\n  font-size: 80%;\n}\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\nsub {\n  bottom: -0.25em;\n}\nsup {\n  top: -0.5em;\n}\n/* Embedded content\n   ========================================================================== */\n/**\n * Remove the border on images inside links in IE 10.\n */\nimg {\n  border-style: none;\n}\n/* Forms\n   ========================================================================== */\n/**\n * 1. Change the font styles in all browsers.\n * 2. Remove the margin in Firefox and Safari.\n */\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: inherit;\n  /* 1 */\n  font-size: 100%;\n  /* 1 */\n  line-height: 1.15;\n  /* 1 */\n  margin: 0;\n  /* 2 */\n}\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\nbutton,\ninput {\n  /* 1 */\n  overflow: visible;\n}\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\nbutton,\nselect {\n  /* 1 */\n  text-transform: none;\n}\n/**\n * Correct the inability to style clickable types in iOS and Safari.\n */\nbutton,\n[type=button],\n[type=reset],\n[type=submit] {\n  -webkit-appearance: button;\n}\n/**\n * Remove the inner border and padding in Firefox.\n */\nbutton::-moz-focus-inner,\n[type=button]::-moz-focus-inner,\n[type=reset]::-moz-focus-inner,\n[type=submit]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n/**\n * Restore the focus styles unset by the previous rule.\n */\nbutton:-moz-focusring,\n[type=button]:-moz-focusring,\n[type=reset]:-moz-focusring,\n[type=submit]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n/**\n * Correct the padding in Firefox.\n */\nfieldset {\n  padding: 0.35em 0.75em 0.625em;\n}\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\nlegend {\n  box-sizing: border-box;\n  /* 1 */\n  color: inherit;\n  /* 2 */\n  display: table;\n  /* 1 */\n  max-width: 100%;\n  /* 1 */\n  padding: 0;\n  /* 3 */\n  white-space: normal;\n  /* 1 */\n}\n/**\n * Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\nprogress {\n  vertical-align: baseline;\n}\n/**\n * Remove the default vertical scrollbar in IE 10+.\n */\ntextarea {\n  overflow: auto;\n}\n/**\n * 1. Add the correct box sizing in IE 10.\n * 2. Remove the padding in IE 10.\n */\n[type=checkbox],\n[type=radio] {\n  box-sizing: border-box;\n  /* 1 */\n  padding: 0;\n  /* 2 */\n}\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n[type=number]::-webkit-inner-spin-button,\n[type=number]::-webkit-outer-spin-button {\n  height: auto;\n}\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n[type=search] {\n  -webkit-appearance: textfield;\n  /* 1 */\n  outline-offset: -2px;\n  /* 2 */\n}\n/**\n * Remove the inner padding in Chrome and Safari on macOS.\n */\n[type=search]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n  /* 1 */\n  font: inherit;\n  /* 2 */\n}\n/* Interactive\n   ========================================================================== */\n/*\n * Add the correct display in Edge, IE 10+, and Firefox.\n */\ndetails {\n  display: block;\n}\n/*\n * Add the correct display in all browsers.\n */\nsummary {\n  display: list-item;\n}\n/* Misc\n   ========================================================================== */\n/**\n * Add the correct display in IE 10+.\n */\ntemplate {\n  display: none;\n}\n/**\n * Add the correct display in IE 10.\n */\n[hidden] {\n  display: none;\n}\n*,\n*::before,\n*::after {\n  box-sizing: border-box;\n}\na {\n  text-decoration: none;\n  color: inherit;\n  cursor: pointer;\n}\nbutton {\n  background-color: transparent;\n  color: inherit;\n  border-width: 0;\n  padding: 0;\n  cursor: pointer;\n}\nfigure {\n  margin: 0;\n}\ninput::-moz-focus-inner {\n  border: 0;\n  padding: 0;\n  margin: 0;\n}\nul, ol, dd {\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\nh1, h2, h3, h4, h5, h6 {\n  margin: 0;\n  font-size: inherit;\n  font-weight: inherit;\n}\np {\n  margin: 0;\n}\ncite {\n  font-style: normal;\n}\nfieldset {\n  border-width: 0;\n  padding: 0;\n  margin: 0;\n}\nhtml, body {\n  font-family: sans-serif;\n}\n.row {\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  position: relative;\n  border-top: 1px solid #D2DBE9;\n  /* Rounded sliders */\n}\n.row .child {\n  width: 50%;\n}\n.row .child:not(:first-child) {\n  border-bottom: 1px solid #D2DBE9;\n}\n.row .switcher {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n}\n.row .switch {\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n}\n.row .switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n.row .slider {\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  transition: 0.4s;\n}\n.row .slider:before {\n  position: absolute;\n  content: \"\";\n  height: 26px;\n  width: 26px;\n  left: 4px;\n  bottom: 4px;\n  background-color: white;\n  transition: 0.4s;\n}\n.row input:checked + .slider {\n  background-color: #2196F3;\n}\n.row input:focus + .slider {\n  box-shadow: 0 0 1px #2196F3;\n}\n.row input:checked + .slider:before {\n  transform: translateX(26px);\n}\n.row .slider.round {\n  border-radius: 34px;\n}\n.row .slider.round:before {\n  border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zb2Jlay9Qcm9qZWN0cy9uZ3gtaW5maS1tYXJrZG93bi9wcm9qZWN0cy9uZ3gtaW5maS1tYXJrZG93bi9zcmMvbGliL19zdHlsZXMvYmFzZS9fbm9ybWFsaXplLnNjc3MiLCJwcm9qZWN0cy9uZ3gtaW5maS1tYXJrZG93bi9zcmMvbGliL25neC1pbmZpLW1hcmtkb3duLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL3NvYmVrL1Byb2plY3RzL25neC1pbmZpLW1hcmtkb3duL3Byb2plY3RzL25neC1pbmZpLW1hcmtkb3duL3NyYy9saWIvX3N0eWxlcy9iYXNlL19yZXNldC5zY3NzIiwiL1VzZXJzL3NvYmVrL1Byb2plY3RzL25neC1pbmZpLW1hcmtkb3duL3Byb2plY3RzL25neC1pbmZpLW1hcmtkb3duL3NyYy9saWIvX3N0eWxlcy9iYXNlL19iYXNlLnNjc3MiLCIvVXNlcnMvc29iZWsvUHJvamVjdHMvbmd4LWluZmktbWFya2Rvd24vcHJvamVjdHMvbmd4LWluZmktbWFya2Rvd24vc3JjL2xpYi9uZ3gtaW5maS1tYXJrZG93bi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwyRUFBQTtBQUVBOytFQUFBO0FBR0E7OztFQUFBO0FBS0M7RUFDRyxpQkFBQTtFQUFtQixNQUFBO0VBQ25CLDhCQUFBO0VBQWdDLE1BQUE7QUNBcEM7QURHRTsrRUFBQTtBQUdBOztFQUFBO0FBSUE7RUFDRSxTQUFBO0FDRko7QURLRTs7RUFBQTtBQUlBO0VBQ0UsY0FBQTtBQ0hKO0FETUU7OztFQUFBO0FBS0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUNKSjtBRE9FOytFQUFBO0FBR0E7OztFQUFBO0FBS0E7RUFDRSx1QkFBQTtFQUF5QixNQUFBO0VBQ3pCLFNBQUE7RUFBVyxNQUFBO0VBQ1gsaUJBQUE7RUFBbUIsTUFBQTtBQ0h2QjtBRE1FOzs7RUFBQTtBQUtBO0VBQ0UsaUNBQUE7RUFBbUMsTUFBQTtFQUNuQyxjQUFBO0VBQWdCLE1BQUE7QUNGcEI7QURLRTsrRUFBQTtBQUdBOztFQUFBO0FBSUE7RUFDRSw2QkFBQTtBQ0pKO0FET0U7OztFQUFBO0FBS0E7RUFDRSxtQkFBQTtFQUFxQixNQUFBO0VBQ3JCLDBCQUFBO0VBQTRCLE1BQUE7RUFDNUIseUNBQUE7VUFBQSxpQ0FBQTtFQUFtQyxNQUFBO0FDRnZDO0FES0U7O0VBQUE7QUFJQTs7RUFFRSxtQkFBQTtBQ0hKO0FETUU7OztFQUFBO0FBS0E7OztFQUdFLGlDQUFBO0VBQW1DLE1BQUE7RUFDbkMsY0FBQTtFQUFnQixNQUFBO0FDRnBCO0FES0U7O0VBQUE7QUFJQTtFQUNFLGNBQUE7QUNISjtBRE1FOzs7RUFBQTtBQUtBOztFQUVFLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtBQ0pKO0FET0U7RUFDRSxlQUFBO0FDSko7QURPRTtFQUNFLFdBQUE7QUNKSjtBRE9FOytFQUFBO0FBR0E7O0VBQUE7QUFJQTtFQUNFLGtCQUFBO0FDTko7QURTRTsrRUFBQTtBQUdBOzs7RUFBQTtBQUtBOzs7OztFQUtFLG9CQUFBO0VBQXNCLE1BQUE7RUFDdEIsZUFBQTtFQUFpQixNQUFBO0VBQ2pCLGlCQUFBO0VBQW1CLE1BQUE7RUFDbkIsU0FBQTtFQUFXLE1BQUE7QUNKZjtBRE9FOzs7RUFBQTtBQUtBOztFQUNRLE1BQUE7RUFDTixpQkFBQTtBQ0pKO0FET0U7OztFQUFBO0FBS0E7O0VBQ1MsTUFBQTtFQUNQLG9CQUFBO0FDSko7QURPRTs7RUFBQTtBQUlBOzs7O0VBSUUsMEJBQUE7QUNMSjtBRFFFOztFQUFBO0FBSUE7Ozs7RUFJRSxrQkFBQTtFQUNBLFVBQUE7QUNOSjtBRFNFOztFQUFBO0FBSUE7Ozs7RUFJRSw4QkFBQTtBQ1BKO0FEVUU7O0VBQUE7QUFJQTtFQUNFLDhCQUFBO0FDUko7QURXRTs7Ozs7RUFBQTtBQU9BO0VBQ0Usc0JBQUE7RUFBd0IsTUFBQTtFQUN4QixjQUFBO0VBQWdCLE1BQUE7RUFDaEIsY0FBQTtFQUFnQixNQUFBO0VBQ2hCLGVBQUE7RUFBaUIsTUFBQTtFQUNqQixVQUFBO0VBQVksTUFBQTtFQUNaLG1CQUFBO0VBQXFCLE1BQUE7QUNIekI7QURNRTs7RUFBQTtBQUlBO0VBQ0Usd0JBQUE7QUNKSjtBRE9FOztFQUFBO0FBSUE7RUFDRSxjQUFBO0FDTEo7QURRRTs7O0VBQUE7QUFLQTs7RUFFRSxzQkFBQTtFQUF3QixNQUFBO0VBQ3hCLFVBQUE7RUFBWSxNQUFBO0FDSmhCO0FET0U7O0VBQUE7QUFJQTs7RUFFRSxZQUFBO0FDTEo7QURRRTs7O0VBQUE7QUFLQTtFQUNFLDZCQUFBO0VBQStCLE1BQUE7RUFDL0Isb0JBQUE7RUFBc0IsTUFBQTtBQ0oxQjtBRE9FOztFQUFBO0FBSUE7RUFDRSx3QkFBQTtBQ0xKO0FEUUU7OztFQUFBO0FBS0E7RUFDRSwwQkFBQTtFQUE0QixNQUFBO0VBQzVCLGFBQUE7RUFBZSxNQUFBO0FDSm5CO0FET0U7K0VBQUE7QUFHQTs7RUFBQTtBQUlBO0VBQ0UsY0FBQTtBQ05KO0FEU0U7O0VBQUE7QUFJQTtFQUNFLGtCQUFBO0FDUEo7QURVRTsrRUFBQTtBQUdBOztFQUFBO0FBSUE7RUFDRSxhQUFBO0FDVEo7QURZRTs7RUFBQTtBQUlBO0VBQ0UsYUFBQTtBQ1ZKO0FDalZBOzs7RUFFUyxzQkFBQTtBRHFWVDtBQ3BWQTtFQUFFLHFCQUFBO0VBQXNCLGNBQUE7RUFBZSxlQUFBO0FEMFZ2QztBQ3pWQTtFQUFPLDZCQUFBO0VBQThCLGNBQUE7RUFBZSxlQUFBO0VBQWdCLFVBQUE7RUFBVyxlQUFBO0FEaVcvRTtBQ2hXQTtFQUFPLFNBQUE7QURvV1A7QUNuV0E7RUFBeUIsU0FBQTtFQUFVLFVBQUE7RUFBVyxTQUFBO0FEeVc5QztBQ3hXQTtFQUFXLFNBQUE7RUFBVSxVQUFBO0VBQVcsZ0JBQUE7QUQ4V2hDO0FDN1dBO0VBQXVCLFNBQUE7RUFBVSxrQkFBQTtFQUFtQixvQkFBQTtBRG1YcEQ7QUNsWEE7RUFBRyxTQUFBO0FEc1hIO0FDclhBO0VBQU0sa0JBQUE7QUR5WE47QUN4WEE7RUFBUyxlQUFBO0VBQWdCLFVBQUE7RUFBVyxTQUFBO0FEOFhwQztBRXpZQTtFQUNJLHVCQUFBO0FGNFlKO0FHM1lBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFpRUEsb0JBQUE7QUg4VUo7QUc3WUk7RUFDSSxVQUFBO0FIK1lSO0FHN1lRO0VBQ0ksZ0NBQUE7QUgrWVo7QUczWUk7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FINllSO0FHMVlJO0VBQ0ksa0JBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FINFlSO0FHellJO0VBQ0ksVUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0FIMllSO0FHeFlJO0VBQ0ksa0JBQUE7RUFDQSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUgwWVI7QUd2WUk7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBSHlZUjtBR3RZSTtFQUNJLHlCQUFBO0FId1lSO0FHcllJO0VBQ0ksMkJBQUE7QUh1WVI7QUdwWUk7RUFHSSwyQkFBQTtBSHNZUjtBR2xZSTtFQUNJLG1CQUFBO0FIb1lSO0FHallJO0VBQ0ksa0JBQUE7QUhtWVIiLCJmaWxlIjoicHJvamVjdHMvbmd4LWluZmktbWFya2Rvd24vc3JjL2xpYi9uZ3gtaW5maS1tYXJrZG93bi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qISBub3JtYWxpemUuY3NzIHY4LjAuMSB8IE1JVCBMaWNlbnNlIHwgZ2l0aHViLmNvbS9uZWNvbGFzL25vcm1hbGl6ZS5jc3MgKi9cblxuLyogRG9jdW1lbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4gKi9cblxuIGh0bWwge1xuICAgIGxpbmUtaGVpZ2h0OiAxLjE1OyAvKiAxICovXG4gICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlOyAvKiAyICovXG4gIH1cbiAgXG4gIC8qIFNlY3Rpb25zXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gIFxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBtYXJnaW4gaW4gYWxsIGJyb3dzZXJzLlxuICAgKi9cbiAgXG4gIGJvZHkge1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICBcbiAgLyoqXG4gICAqIFJlbmRlciB0aGUgYG1haW5gIGVsZW1lbnQgY29uc2lzdGVudGx5IGluIElFLlxuICAgKi9cbiAgXG4gIG1haW4ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAvKipcbiAgICogQ29ycmVjdCB0aGUgZm9udCBzaXplIGFuZCBtYXJnaW4gb24gYGgxYCBlbGVtZW50cyB3aXRoaW4gYHNlY3Rpb25gIGFuZFxuICAgKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxuICAgKi9cbiAgXG4gIGgxIHtcbiAgICBmb250LXNpemU6IDJlbTtcbiAgICBtYXJnaW46IDAuNjdlbSAwO1xuICB9XG4gIFxuICAvKiBHcm91cGluZyBjb250ZW50XG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gIFxuICAvKipcbiAgICogMS4gQWRkIHRoZSBjb3JyZWN0IGJveCBzaXppbmcgaW4gRmlyZWZveC5cbiAgICogMi4gU2hvdyB0aGUgb3ZlcmZsb3cgaW4gRWRnZSBhbmQgSUUuXG4gICAqL1xuICBcbiAgaHIge1xuICAgIGJveC1zaXppbmc6IGNvbnRlbnQtYm94OyAvKiAxICovXG4gICAgaGVpZ2h0OiAwOyAvKiAxICovXG4gICAgb3ZlcmZsb3c6IHZpc2libGU7IC8qIDIgKi9cbiAgfVxuICBcbiAgLyoqXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAgICovXG4gIFxuICBwcmUge1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xuICAgIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXG4gIH1cbiAgXG4gIC8qIFRleHQtbGV2ZWwgc2VtYW50aWNzXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gIFxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxuICAgKi9cbiAgXG4gIGEge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICB9XG4gIFxuICAvKipcbiAgICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIENocm9tZSA1Ny1cbiAgICogMi4gQWRkIHRoZSBjb3JyZWN0IHRleHQgZGVjb3JhdGlvbiBpbiBDaHJvbWUsIEVkZ2UsIElFLCBPcGVyYSwgYW5kIFNhZmFyaS5cbiAgICovXG4gIFxuICBhYmJyW3RpdGxlXSB7XG4gICAgYm9yZGVyLWJvdHRvbTogbm9uZTsgLyogMSAqL1xuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lOyAvKiAyICovXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkOyAvKiAyICovXG4gIH1cbiAgXG4gIC8qKlxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCB3ZWlnaHQgaW4gQ2hyb21lLCBFZGdlLCBhbmQgU2FmYXJpLlxuICAgKi9cbiAgXG4gIGIsXG4gIHN0cm9uZyB7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcbiAgfVxuICBcbiAgLyoqXG4gICAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXG4gICAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAgICovXG4gIFxuICBjb2RlLFxuICBrYmQsXG4gIHNhbXAge1xuICAgIGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xuICAgIGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXG4gIH1cbiAgXG4gIC8qKlxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAgICovXG4gIFxuICBzbWFsbCB7XG4gICAgZm9udC1zaXplOiA4MCU7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cbiAgICogYWxsIGJyb3dzZXJzLlxuICAgKi9cbiAgXG4gIHN1YixcbiAgc3VwIHtcbiAgICBmb250LXNpemU6IDc1JTtcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xuICB9XG4gIFxuICBzdWIge1xuICAgIGJvdHRvbTogLTAuMjVlbTtcbiAgfVxuICBcbiAgc3VwIHtcbiAgICB0b3A6IC0wLjVlbTtcbiAgfVxuICBcbiAgLyogRW1iZWRkZWQgY29udGVudFxuICAgICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuICBcbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgYm9yZGVyIG9uIGltYWdlcyBpbnNpZGUgbGlua3MgaW4gSUUgMTAuXG4gICAqL1xuICBcbiAgaW1nIHtcbiAgICBib3JkZXItc3R5bGU6IG5vbmU7XG4gIH1cbiAgXG4gIC8qIEZvcm1zXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gIFxuICAvKipcbiAgICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXG4gICAqIDIuIFJlbW92ZSB0aGUgbWFyZ2luIGluIEZpcmVmb3ggYW5kIFNhZmFyaS5cbiAgICovXG4gIFxuICBidXR0b24sXG4gIGlucHV0LFxuICBvcHRncm91cCxcbiAgc2VsZWN0LFxuICB0ZXh0YXJlYSB7XG4gICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7IC8qIDEgKi9cbiAgICBmb250LXNpemU6IDEwMCU7IC8qIDEgKi9cbiAgICBsaW5lLWhlaWdodDogMS4xNTsgLyogMSAqL1xuICAgIG1hcmdpbjogMDsgLyogMiAqL1xuICB9XG4gIFxuICAvKipcbiAgICogU2hvdyB0aGUgb3ZlcmZsb3cgaW4gSUUuXG4gICAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXG4gICAqL1xuICBcbiAgYnV0dG9uLFxuICBpbnB1dCB7IC8qIDEgKi9cbiAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRWRnZSwgRmlyZWZveCwgYW5kIElFLlxuICAgKiAxLiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEZpcmVmb3guXG4gICAqL1xuICBcbiAgYnV0dG9uLFxuICBzZWxlY3QgeyAvKiAxICovXG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICAgKi9cbiAgXG4gIGJ1dHRvbixcbiAgW3R5cGU9XCJidXR0b25cIl0sXG4gIFt0eXBlPVwicmVzZXRcIl0sXG4gIFt0eXBlPVwic3VibWl0XCJdIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjtcbiAgfVxuICBcbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXG4gICAqL1xuICBcbiAgYnV0dG9uOjotbW96LWZvY3VzLWlubmVyLFxuICBbdHlwZT1cImJ1dHRvblwiXTo6LW1vei1mb2N1cy1pbm5lcixcbiAgW3R5cGU9XCJyZXNldFwiXTo6LW1vei1mb2N1cy1pbm5lcixcbiAgW3R5cGU9XCJzdWJtaXRcIl06Oi1tb3otZm9jdXMtaW5uZXIge1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG4gIFxuICAvKipcbiAgICogUmVzdG9yZSB0aGUgZm9jdXMgc3R5bGVzIHVuc2V0IGJ5IHRoZSBwcmV2aW91cyBydWxlLlxuICAgKi9cbiAgXG4gIGJ1dHRvbjotbW96LWZvY3VzcmluZyxcbiAgW3R5cGU9XCJidXR0b25cIl06LW1vei1mb2N1c3JpbmcsXG4gIFt0eXBlPVwicmVzZXRcIl06LW1vei1mb2N1c3JpbmcsXG4gIFt0eXBlPVwic3VibWl0XCJdOi1tb3otZm9jdXNyaW5nIHtcbiAgICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiBDb3JyZWN0IHRoZSBwYWRkaW5nIGluIEZpcmVmb3guXG4gICAqL1xuICBcbiAgZmllbGRzZXQge1xuICAgIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIDEuIENvcnJlY3QgdGhlIHRleHQgd3JhcHBpbmcgaW4gRWRnZSBhbmQgSUUuXG4gICAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cbiAgICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxuICAgKiAgICBgZmllbGRzZXRgIGVsZW1lbnRzIGluIGFsbCBicm93c2Vycy5cbiAgICovXG4gIFxuICBsZWdlbmQge1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cbiAgICBjb2xvcjogaW5oZXJpdDsgLyogMiAqL1xuICAgIGRpc3BsYXk6IHRhYmxlOyAvKiAxICovXG4gICAgbWF4LXdpZHRoOiAxMDAlOyAvKiAxICovXG4gICAgcGFkZGluZzogMDsgLyogMyAqL1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7IC8qIDEgKi9cbiAgfVxuICBcbiAgLyoqXG4gICAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXG4gICAqL1xuICBcbiAgcHJvZ3Jlc3Mge1xuICAgIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbiAgfVxuICBcbiAgLyoqXG4gICAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxuICAgKi9cbiAgXG4gIHRleHRhcmVhIHtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgfVxuICBcbiAgLyoqXG4gICAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxuICAgKiAyLiBSZW1vdmUgdGhlIHBhZGRpbmcgaW4gSUUgMTAuXG4gICAqL1xuICBcbiAgW3R5cGU9XCJjaGVja2JveFwiXSxcbiAgW3R5cGU9XCJyYWRpb1wiXSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xuICAgIHBhZGRpbmc6IDA7IC8qIDIgKi9cbiAgfVxuICBcbiAgLyoqXG4gICAqIENvcnJlY3QgdGhlIGN1cnNvciBzdHlsZSBvZiBpbmNyZW1lbnQgYW5kIGRlY3JlbWVudCBidXR0b25zIGluIENocm9tZS5cbiAgICovXG4gIFxuICBbdHlwZT1cIm51bWJlclwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcbiAgW3R5cGU9XCJudW1iZXJcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xuICAgIGhlaWdodDogYXV0bztcbiAgfVxuICBcbiAgLyoqXG4gICAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxuICAgKiAyLiBDb3JyZWN0IHRoZSBvdXRsaW5lIHN0eWxlIGluIFNhZmFyaS5cbiAgICovXG4gIFxuICBbdHlwZT1cInNlYXJjaFwiXSB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7IC8qIDEgKi9cbiAgICBvdXRsaW5lLW9mZnNldDogLTJweDsgLyogMiAqL1xuICB9XG4gIFxuICAvKipcbiAgICogUmVtb3ZlIHRoZSBpbm5lciBwYWRkaW5nIGluIENocm9tZSBhbmQgU2FmYXJpIG9uIG1hY09TLlxuICAgKi9cbiAgXG4gIFt0eXBlPVwic2VhcmNoXCJdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uIHtcbiAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIH1cbiAgXG4gIC8qKlxuICAgKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICAgKiAyLiBDaGFuZ2UgZm9udCBwcm9wZXJ0aWVzIHRvIGBpbmhlcml0YCBpbiBTYWZhcmkuXG4gICAqL1xuICBcbiAgOjotd2Via2l0LWZpbGUtdXBsb2FkLWJ1dHRvbiB7XG4gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDEgKi9cbiAgICBmb250OiBpbmhlcml0OyAvKiAyICovXG4gIH1cbiAgXG4gIC8qIEludGVyYWN0aXZlXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gIFxuICAvKlxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxuICAgKi9cbiAgXG4gIGRldGFpbHMge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG4gIFxuICAvKlxuICAgKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXG4gICAqL1xuICBcbiAgc3VtbWFyeSB7XG4gICAgZGlzcGxheTogbGlzdC1pdGVtO1xuICB9XG4gIFxuICAvKiBNaXNjXG4gICAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4gIFxuICAvKipcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTArLlxuICAgKi9cbiAgXG4gIHRlbXBsYXRlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIFxuICAvKipcbiAgICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gSUUgMTAuXG4gICAqL1xuICBcbiAgW2hpZGRlbl0ge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH0iLCIvKiEgbm9ybWFsaXplLmNzcyB2OC4wLjEgfCBNSVQgTGljZW5zZSB8IGdpdGh1Yi5jb20vbmVjb2xhcy9ub3JtYWxpemUuY3NzICovXG4vKiBEb2N1bWVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgbGluZSBoZWlnaHQgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gUHJldmVudCBhZGp1c3RtZW50cyBvZiBmb250IHNpemUgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBpT1MuXG4gKi9cbmh0bWwge1xuICBsaW5lLWhlaWdodDogMS4xNTtcbiAgLyogMSAqL1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC8qIDIgKi9cbn1cblxuLyogU2VjdGlvbnNcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKipcbiAqIFJlbW92ZSB0aGUgbWFyZ2luIGluIGFsbCBicm93c2Vycy5cbiAqL1xuYm9keSB7XG4gIG1hcmdpbjogMDtcbn1cblxuLyoqXG4gKiBSZW5kZXIgdGhlIGBtYWluYCBlbGVtZW50IGNvbnNpc3RlbnRseSBpbiBJRS5cbiAqL1xubWFpbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4vKipcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcbiAqIGBhcnRpY2xlYCBjb250ZXh0cyBpbiBDaHJvbWUsIEZpcmVmb3gsIGFuZCBTYWZhcmkuXG4gKi9cbmgxIHtcbiAgZm9udC1zaXplOiAyZW07XG4gIG1hcmdpbjogMC42N2VtIDA7XG59XG5cbi8qIEdyb3VwaW5nIGNvbnRlbnRcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKipcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIEZpcmVmb3guXG4gKiAyLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlIGFuZCBJRS5cbiAqL1xuaHIge1xuICBib3gtc2l6aW5nOiBjb250ZW50LWJveDtcbiAgLyogMSAqL1xuICBoZWlnaHQ6IDA7XG4gIC8qIDEgKi9cbiAgb3ZlcmZsb3c6IHZpc2libGU7XG4gIC8qIDIgKi9cbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmhlcml0YW5jZSBhbmQgc2NhbGluZyBvZiBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxuICovXG5wcmUge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XG4gIC8qIDEgKi9cbiAgZm9udC1zaXplOiAxZW07XG4gIC8qIDIgKi9cbn1cblxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3NcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKipcbiAqIFJlbW92ZSB0aGUgZ3JheSBiYWNrZ3JvdW5kIG9uIGFjdGl2ZSBsaW5rcyBpbiBJRSAxMC5cbiAqL1xuYSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG4vKipcbiAqIDEuIFJlbW92ZSB0aGUgYm90dG9tIGJvcmRlciBpbiBDaHJvbWUgNTctXG4gKiAyLiBBZGQgdGhlIGNvcnJlY3QgdGV4dCBkZWNvcmF0aW9uIGluIENocm9tZSwgRWRnZSwgSUUsIE9wZXJhLCBhbmQgU2FmYXJpLlxuICovXG5hYmJyW3RpdGxlXSB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG4gIC8qIDEgKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIC8qIDIgKi9cbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmUgZG90dGVkO1xuICAvKiAyICovXG59XG5cbi8qKlxuICogQWRkIHRoZSBjb3JyZWN0IGZvbnQgd2VpZ2h0IGluIENocm9tZSwgRWRnZSwgYW5kIFNhZmFyaS5cbiAqL1xuYixcbnN0cm9uZyB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkZXI7XG59XG5cbi8qKlxuICogMS4gQ29ycmVjdCB0aGUgaW5oZXJpdGFuY2UgYW5kIHNjYWxpbmcgb2YgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqIDIuIENvcnJlY3QgdGhlIG9kZCBgZW1gIGZvbnQgc2l6aW5nIGluIGFsbCBicm93c2Vycy5cbiAqL1xuY29kZSxcbmtiZCxcbnNhbXAge1xuICBmb250LWZhbWlseTogbW9ub3NwYWNlLCBtb25vc3BhY2U7XG4gIC8qIDEgKi9cbiAgZm9udC1zaXplOiAxZW07XG4gIC8qIDIgKi9cbn1cblxuLyoqXG4gKiBBZGQgdGhlIGNvcnJlY3QgZm9udCBzaXplIGluIGFsbCBicm93c2Vycy5cbiAqL1xuc21hbGwge1xuICBmb250LXNpemU6IDgwJTtcbn1cblxuLyoqXG4gKiBQcmV2ZW50IGBzdWJgIGFuZCBgc3VwYCBlbGVtZW50cyBmcm9tIGFmZmVjdGluZyB0aGUgbGluZSBoZWlnaHQgaW5cbiAqIGFsbCBicm93c2Vycy5cbiAqL1xuc3ViLFxuc3VwIHtcbiAgZm9udC1zaXplOiA3NSU7XG4gIGxpbmUtaGVpZ2h0OiAwO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcbn1cblxuc3ViIHtcbiAgYm90dG9tOiAtMC4yNWVtO1xufVxuXG5zdXAge1xuICB0b3A6IC0wLjVlbTtcbn1cblxuLyogRW1iZWRkZWQgY29udGVudFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC5cbiAqL1xuaW1nIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG4vKiBGb3Jtc1xuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qKlxuICogMS4gQ2hhbmdlIHRoZSBmb250IHN0eWxlcyBpbiBhbGwgYnJvd3NlcnMuXG4gKiAyLiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXG4gKi9cbmJ1dHRvbixcbmlucHV0LFxub3B0Z3JvdXAsXG5zZWxlY3QsXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAvKiAxICovXG4gIGZvbnQtc2l6ZTogMTAwJTtcbiAgLyogMSAqL1xuICBsaW5lLWhlaWdodDogMS4xNTtcbiAgLyogMSAqL1xuICBtYXJnaW46IDA7XG4gIC8qIDIgKi9cbn1cblxuLyoqXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cbiAqIDEuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UuXG4gKi9cbmJ1dHRvbixcbmlucHV0IHtcbiAgLyogMSAqL1xuICBvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuLyoqXG4gKiBSZW1vdmUgdGhlIGluaGVyaXRhbmNlIG9mIHRleHQgdHJhbnNmb3JtIGluIEVkZ2UsIEZpcmVmb3gsIGFuZCBJRS5cbiAqIDEuIFJlbW92ZSB0aGUgaW5oZXJpdGFuY2Ugb2YgdGV4dCB0cmFuc2Zvcm0gaW4gRmlyZWZveC5cbiAqL1xuYnV0dG9uLFxuc2VsZWN0IHtcbiAgLyogMSAqL1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICovXG5idXR0b24sXG5bdHlwZT1idXR0b25dLFxuW3R5cGU9cmVzZXRdLFxuW3R5cGU9c3VibWl0XSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogYnV0dG9uO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5uZXIgYm9yZGVyIGFuZCBwYWRkaW5nIGluIEZpcmVmb3guXG4gKi9cbmJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcixcblt0eXBlPWJ1dHRvbl06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1yZXNldF06Oi1tb3otZm9jdXMtaW5uZXIsXG5bdHlwZT1zdWJtaXRdOjotbW96LWZvY3VzLWlubmVyIHtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xufVxuXG4vKipcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cbiAqL1xuYnV0dG9uOi1tb3otZm9jdXNyaW5nLFxuW3R5cGU9YnV0dG9uXTotbW96LWZvY3VzcmluZyxcblt0eXBlPXJlc2V0XTotbW96LWZvY3VzcmluZyxcblt0eXBlPXN1Ym1pdF06LW1vei1mb2N1c3Jpbmcge1xuICBvdXRsaW5lOiAxcHggZG90dGVkIEJ1dHRvblRleHQ7XG59XG5cbi8qKlxuICogQ29ycmVjdCB0aGUgcGFkZGluZyBpbiBGaXJlZm94LlxuICovXG5maWVsZHNldCB7XG4gIHBhZGRpbmc6IDAuMzVlbSAwLjc1ZW0gMC42MjVlbTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxuICogMi4gQ29ycmVjdCB0aGUgY29sb3IgaW5oZXJpdGFuY2UgZnJvbSBgZmllbGRzZXRgIGVsZW1lbnRzIGluIElFLlxuICogMy4gUmVtb3ZlIHRoZSBwYWRkaW5nIHNvIGRldmVsb3BlcnMgYXJlIG5vdCBjYXVnaHQgb3V0IHdoZW4gdGhleSB6ZXJvIG91dFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cbmxlZ2VuZCB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIC8qIDEgKi9cbiAgY29sb3I6IGluaGVyaXQ7XG4gIC8qIDIgKi9cbiAgZGlzcGxheTogdGFibGU7XG4gIC8qIDEgKi9cbiAgbWF4LXdpZHRoOiAxMDAlO1xuICAvKiAxICovXG4gIHBhZGRpbmc6IDA7XG4gIC8qIDMgKi9cbiAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgLyogMSAqL1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXG4gKi9cbnByb2dyZXNzIHtcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgZGVmYXVsdCB2ZXJ0aWNhbCBzY3JvbGxiYXIgaW4gSUUgMTArLlxuICovXG50ZXh0YXJlYSB7XG4gIG92ZXJmbG93OiBhdXRvO1xufVxuXG4vKipcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBib3ggc2l6aW5nIGluIElFIDEwLlxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLlxuICovXG5bdHlwZT1jaGVja2JveF0sXG5bdHlwZT1yYWRpb10ge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAvKiAxICovXG4gIHBhZGRpbmc6IDA7XG4gIC8qIDIgKi9cbn1cblxuLyoqXG4gKiBDb3JyZWN0IHRoZSBjdXJzb3Igc3R5bGUgb2YgaW5jcmVtZW50IGFuZCBkZWNyZW1lbnQgYnV0dG9ucyBpbiBDaHJvbWUuXG4gKi9cblt0eXBlPW51bWJlcl06Oi13ZWJraXQtaW5uZXItc3Bpbi1idXR0b24sXG5bdHlwZT1udW1iZXJdOjotd2Via2l0LW91dGVyLXNwaW4tYnV0dG9uIHtcbiAgaGVpZ2h0OiBhdXRvO1xufVxuXG4vKipcbiAqIDEuIENvcnJlY3QgdGhlIG9kZCBhcHBlYXJhbmNlIGluIENocm9tZSBhbmQgU2FmYXJpLlxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXG4gKi9cblt0eXBlPXNlYXJjaF0ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDtcbiAgLyogMSAqL1xuICBvdXRsaW5lLW9mZnNldDogLTJweDtcbiAgLyogMiAqL1xufVxuXG4vKipcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBpbiBDaHJvbWUgYW5kIFNhZmFyaSBvbiBtYWNPUy5cbiAqL1xuW3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLyoqXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxuICogMi4gQ2hhbmdlIGZvbnQgcHJvcGVydGllcyB0byBgaW5oZXJpdGAgaW4gU2FmYXJpLlxuICovXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247XG4gIC8qIDEgKi9cbiAgZm9udDogaW5oZXJpdDtcbiAgLyogMiAqL1xufVxuXG4vKiBJbnRlcmFjdGl2ZVxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBFZGdlLCBJRSAxMCssIGFuZCBGaXJlZm94LlxuICovXG5kZXRhaWxzIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi8qXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBhbGwgYnJvd3NlcnMuXG4gKi9cbnN1bW1hcnkge1xuICBkaXNwbGF5OiBsaXN0LWl0ZW07XG59XG5cbi8qIE1pc2NcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwKy5cbiAqL1xudGVtcGxhdGUge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKipcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLlxuICovXG5baGlkZGVuXSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbiosXG4qOjpiZWZvcmUsXG4qOjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYm9yZGVyLXdpZHRoOiAwO1xuICBwYWRkaW5nOiAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbmZpZ3VyZSB7XG4gIG1hcmdpbjogMDtcbn1cblxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge1xuICBib3JkZXI6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxudWwsIG9sLCBkZCB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiB7XG4gIG1hcmdpbjogMDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbn1cblxucCB7XG4gIG1hcmdpbjogMDtcbn1cblxuY2l0ZSB7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cblxuZmllbGRzZXQge1xuICBib3JkZXItd2lkdGg6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuaHRtbCwgYm9keSB7XG4gIGZvbnQtZmFtaWx5OiBzYW5zLXNlcmlmO1xufVxuXG4ucm93IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjRDJEQkU5O1xuICAvKiBSb3VuZGVkIHNsaWRlcnMgKi9cbn1cbi5yb3cgLmNoaWxkIHtcbiAgd2lkdGg6IDUwJTtcbn1cbi5yb3cgLmNoaWxkOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEMkRCRTk7XG59XG4ucm93IC5zd2l0Y2hlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAyMHB4O1xuICByaWdodDogMjBweDtcbn1cbi5yb3cgLnN3aXRjaCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICB3aWR0aDogNjBweDtcbiAgaGVpZ2h0OiAzNHB4O1xufVxuLnJvdyAuc3dpdGNoIGlucHV0IHtcbiAgb3BhY2l0eTogMDtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn1cbi5yb3cgLnNsaWRlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGJhY2tncm91bmQtY29sb3I6ICNjY2M7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG4ucm93IC5zbGlkZXI6YmVmb3JlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb250ZW50OiBcIlwiO1xuICBoZWlnaHQ6IDI2cHg7XG4gIHdpZHRoOiAyNnB4O1xuICBsZWZ0OiA0cHg7XG4gIGJvdHRvbTogNHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgdHJhbnNpdGlvbjogMC40cztcbn1cbi5yb3cgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjE5NkYzO1xufVxuLnJvdyBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xuICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XG59XG4ucm93IGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyOmJlZm9yZSB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDI2cHgpO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG59XG4ucm93IC5zbGlkZXIucm91bmQge1xuICBib3JkZXItcmFkaXVzOiAzNHB4O1xufVxuLnJvdyAuc2xpZGVyLnJvdW5kOmJlZm9yZSB7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iLCIqLFxuKjo6YmVmb3JlLFxuKjo6YWZ0ZXJ7Ym94LXNpemluZzpib3JkZXItYm94O31cbmF7dGV4dC1kZWNvcmF0aW9uOm5vbmU7IGNvbG9yOmluaGVyaXQ7IGN1cnNvcjpwb2ludGVyO31cbmJ1dHRvbntiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50OyBjb2xvcjppbmhlcml0OyBib3JkZXItd2lkdGg6MDsgcGFkZGluZzowOyBjdXJzb3I6cG9pbnRlcjt9XG5maWd1cmV7bWFyZ2luOjA7fVxuaW5wdXQ6Oi1tb3otZm9jdXMtaW5uZXIge2JvcmRlcjowOyBwYWRkaW5nOjA7IG1hcmdpbjowO31cbnVsLCBvbCwgZGR7bWFyZ2luOjA7IHBhZGRpbmc6MDsgbGlzdC1zdHlsZTpub25lO31cbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDZ7bWFyZ2luOjA7IGZvbnQtc2l6ZTppbmhlcml0OyBmb250LXdlaWdodDppbmhlcml0O31cbnB7IG1hcmdpbjowO31cbmNpdGUge2ZvbnQtc3R5bGU6bm9ybWFsO31cbmZpZWxkc2V0e2JvcmRlci13aWR0aDowOyBwYWRkaW5nOjA7IG1hcmdpbjowO30iLCJodG1sLCBib2R5IHtcbiAgICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcbn1cbiIsIkBpbXBvcnQgJ19zdHlsZXMvbWFpbi5zY3NzJztcblxuLnJvdyB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNEMkRCRTk7XG5cbiAgICAuY2hpbGQge1xuICAgICAgICB3aWR0aDogNTAlO1xuXG4gICAgICAgICY6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNEMkRCRTk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuc3dpdGNoZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMjBweDtcbiAgICAgICAgcmlnaHQ6IDIwcHg7XG4gICAgfVxuXG4gICAgLnN3aXRjaCB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogNjBweDtcbiAgICAgICAgaGVpZ2h0OiAzNHB4O1xuICAgIH1cbiAgICAgIFxuICAgIC5zd2l0Y2ggaW5wdXQgeyBcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICB9XG4gICAgICBcbiAgICAuc2xpZGVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2NjYztcbiAgICAgICAgdHJhbnNpdGlvbjogLjRzO1xuICAgIH1cbiAgICAgIFxuICAgIC5zbGlkZXI6YmVmb3JlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBoZWlnaHQ6IDI2cHg7XG4gICAgICAgIHdpZHRoOiAyNnB4O1xuICAgICAgICBsZWZ0OiA0cHg7XG4gICAgICAgIGJvdHRvbTogNHB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgdHJhbnNpdGlvbjogLjRzO1xuICAgIH1cbiAgICAgIFxuICAgIGlucHV0OmNoZWNrZWQgKyAuc2xpZGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzIxOTZGMztcbiAgICB9XG4gICAgICBcbiAgICBpbnB1dDpmb2N1cyArIC5zbGlkZXIge1xuICAgICAgICBib3gtc2hhZG93OiAwIDAgMXB4ICMyMTk2RjM7XG4gICAgfVxuICAgICAgXG4gICAgaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gICAgICAgIC1tcy10cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMjZweCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgyNnB4KTtcbiAgICB9XG4gICAgICBcbiAgICAvKiBSb3VuZGVkIHNsaWRlcnMgKi9cbiAgICAuc2xpZGVyLnJvdW5kIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMzRweDtcbiAgICB9XG4gICAgXG4gICAgLnNsaWRlci5yb3VuZDpiZWZvcmUge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgfVxufSJdfQ== */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxInfiMarkdownComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'ngx-infi-markdown',
                template: `
    <div class="row">
      <editor
        appResizable
        #appResizable="appResizable"
        [resizableMinWidth]="250"
        (onWidthChange)="handleWidthChange($event)"
        class="child"
      ></editor>

      <preview [style.width]="previewWidth" class="child"></preview>

      <div class="switcher">
        <label class="switch">
          <input (change)="toggleStyles($event)" type="checkbox" />
          <span class="slider round"></span>
        </label>
      </div>
    </div>
  `,
                styleUrls: ['./ngx-infi-markdown.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _core_services_tree_service__WEBPACK_IMPORTED_MODULE_2__["TreeService"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
            }, {
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_core_configs__WEBPACK_IMPORTED_MODULE_1__["USER_STYLE_CONFIG"]]
            }] }]; }, { styles: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "../ngx-infi-markdown/src/lib/ngx-infi-markdown.module.ts":
/*!****************************************************************!*\
  !*** ../ngx-infi-markdown/src/lib/ngx-infi-markdown.module.ts ***!
  \****************************************************************/
/*! exports provided: NgxInfiMarkdownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxInfiMarkdownModule", function() { return NgxInfiMarkdownModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_infi_markdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngx-infi-markdown.component */ "../ngx-infi-markdown/src/lib/ngx-infi-markdown.component.ts");
/* harmony import */ var _core_components_editor_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_core/components/editor/editor.component */ "../ngx-infi-markdown/src/lib/_core/components/editor/editor.component.ts");
/* harmony import */ var _core_components_preview_preview_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_core/components/preview/preview.component */ "../ngx-infi-markdown/src/lib/_core/components/preview/preview.component.ts");
/* harmony import */ var _core_directives_resizable_directive__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_core/directives/resizable.directive */ "../ngx-infi-markdown/src/lib/_core/directives/resizable.directive.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _core_pipes_sanitizeHtml_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_core/pipes/sanitizeHtml.pipe */ "../ngx-infi-markdown/src/lib/_core/pipes/sanitizeHtml.pipe.ts");
/* harmony import */ var _core_components_min_toolbar_min_toolbar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_core/components/min-toolbar/min-toolbar.component */ "../ngx-infi-markdown/src/lib/_core/components/min-toolbar/min-toolbar.component.ts");
/* harmony import */ var _core_directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./_core/directives/tooltip.directive */ "../ngx-infi-markdown/src/lib/_core/directives/tooltip.directive.ts");
/* harmony import */ var _core_components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./_core/components/tooltip/tooltip.component */ "../ngx-infi-markdown/src/lib/_core/components/tooltip/tooltip.component.ts");
/* harmony import */ var _core_configs__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./_core/configs */ "../ngx-infi-markdown/src/lib/_core/configs/index.ts");
/* harmony import */ var _core_services_storage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./_core/services/storage.service */ "../ngx-infi-markdown/src/lib/_core/services/storage.service.ts");
/* harmony import */ var _core_utils__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./_core/utils */ "../ngx-infi-markdown/src/lib/_core/utils/index.ts");














class NgxInfiMarkdownModule {
    static forRoot({ styles = null, storageType = 'none' }) {
        return {
            ngModule: NgxInfiMarkdownModule,
            providers: [
                {
                    provide: _core_configs__WEBPACK_IMPORTED_MODULE_10__["USER_STYLE_CONFIG"],
                    useValue: styles,
                },
                {
                    provide: _core_services_storage_service__WEBPACK_IMPORTED_MODULE_11__["StorageService"],
                    useFactory: () => {
                        return Object(_core_utils__WEBPACK_IMPORTED_MODULE_12__["match"])(storageType)
                            .on((x) => x === 'localStorage', () => new _core_services_storage_service__WEBPACK_IMPORTED_MODULE_11__["LocalStorageService"]())
                            .on((x) => x === 'sessionStorage', () => new _core_services_storage_service__WEBPACK_IMPORTED_MODULE_11__["SessionStorageService"]())
                            .otherwise((x) => null);
                    }
                }
            ],
        };
    }
}
NgxInfiMarkdownModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: NgxInfiMarkdownModule });
NgxInfiMarkdownModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function NgxInfiMarkdownModule_Factory(t) { return new (t || NgxInfiMarkdownModule)(); }, imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](NgxInfiMarkdownModule, { declarations: [_ngx_infi_markdown_component__WEBPACK_IMPORTED_MODULE_1__["NgxInfiMarkdownComponent"],
        _core_components_editor_editor_component__WEBPACK_IMPORTED_MODULE_2__["EditorComponent"],
        _core_components_preview_preview_component__WEBPACK_IMPORTED_MODULE_3__["PreviewComponent"],
        _core_directives_resizable_directive__WEBPACK_IMPORTED_MODULE_4__["ResizableDirective"],
        _core_directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"],
        _core_pipes_sanitizeHtml_pipe__WEBPACK_IMPORTED_MODULE_6__["SanitizeHtmlPipe"],
        _core_components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_9__["TooltipComponent"],
        _core_components_min_toolbar_min_toolbar_component__WEBPACK_IMPORTED_MODULE_7__["MinToolbarComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]], exports: [_ngx_infi_markdown_component__WEBPACK_IMPORTED_MODULE_1__["NgxInfiMarkdownComponent"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxInfiMarkdownModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _ngx_infi_markdown_component__WEBPACK_IMPORTED_MODULE_1__["NgxInfiMarkdownComponent"],
                    _core_components_editor_editor_component__WEBPACK_IMPORTED_MODULE_2__["EditorComponent"],
                    _core_components_preview_preview_component__WEBPACK_IMPORTED_MODULE_3__["PreviewComponent"],
                    _core_directives_resizable_directive__WEBPACK_IMPORTED_MODULE_4__["ResizableDirective"],
                    _core_directives_tooltip_directive__WEBPACK_IMPORTED_MODULE_8__["TooltipDirective"],
                    _core_pipes_sanitizeHtml_pipe__WEBPACK_IMPORTED_MODULE_6__["SanitizeHtmlPipe"],
                    _core_components_tooltip_tooltip_component__WEBPACK_IMPORTED_MODULE_9__["TooltipComponent"],
                    _core_components_min_toolbar_min_toolbar_component__WEBPACK_IMPORTED_MODULE_7__["MinToolbarComponent"],
                ],
                imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"]],
                exports: [_ngx_infi_markdown_component__WEBPACK_IMPORTED_MODULE_1__["NgxInfiMarkdownComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "../ngx-infi-markdown/src/lib/ngx-infi-markdown.service.ts":
/*!*****************************************************************!*\
  !*** ../ngx-infi-markdown/src/lib/ngx-infi-markdown.service.ts ***!
  \*****************************************************************/
/*! exports provided: NgxInfiMarkdownService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NgxInfiMarkdownService", function() { return NgxInfiMarkdownService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_tree_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_core/services/tree.service */ "../ngx-infi-markdown/src/lib/_core/services/tree.service.ts");



class NgxInfiMarkdownService {
    constructor(treeService) {
        this.treeService = treeService;
    }
    /**
     * Returns observable of currently created content
     *
     * @return {Observable} content observable
     */
    html$() {
        return this.treeService.contentOb$;
    }
    /**
     * Returns currently created content synchronously
     *
     * @return {string} content
     */
    getHtml() {
        return this.treeService.buildView();
    }
}
NgxInfiMarkdownService.ɵfac = function NgxInfiMarkdownService_Factory(t) { return new (t || NgxInfiMarkdownService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_core_services_tree_service__WEBPACK_IMPORTED_MODULE_1__["TreeService"])); };
NgxInfiMarkdownService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: NgxInfiMarkdownService, factory: NgxInfiMarkdownService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NgxInfiMarkdownService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root',
            }]
    }], function () { return [{ type: _core_services_tree_service__WEBPACK_IMPORTED_MODULE_1__["TreeService"] }]; }, null); })();


/***/ }),

/***/ "../ngx-infi-markdown/src/public-api.ts":
/*!**********************************************!*\
  !*** ../ngx-infi-markdown/src/public-api.ts ***!
  \**********************************************/
/*! exports provided: NgxInfiMarkdownService, NgxInfiMarkdownComponent, NgxInfiMarkdownModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_ngx_infi_markdown_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/ngx-infi-markdown.service */ "../ngx-infi-markdown/src/lib/ngx-infi-markdown.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxInfiMarkdownService", function() { return _lib_ngx_infi_markdown_service__WEBPACK_IMPORTED_MODULE_0__["NgxInfiMarkdownService"]; });

/* harmony import */ var _lib_ngx_infi_markdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/ngx-infi-markdown.component */ "../ngx-infi-markdown/src/lib/ngx-infi-markdown.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxInfiMarkdownComponent", function() { return _lib_ngx_infi_markdown_component__WEBPACK_IMPORTED_MODULE_1__["NgxInfiMarkdownComponent"]; });

/* harmony import */ var _lib_ngx_infi_markdown_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/ngx-infi-markdown.module */ "../ngx-infi-markdown/src/lib/ngx-infi-markdown.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NgxInfiMarkdownModule", function() { return _lib_ngx_infi_markdown_module__WEBPACK_IMPORTED_MODULE_2__["NgxInfiMarkdownModule"]; });

/*
 * Public API Surface of ngx-infi-markdown
 */





/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _ngx_infi_markdown_src_lib_ngx_infi_markdown_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../ngx-infi-markdown/src/lib/ngx-infi-markdown.component */ "../ngx-infi-markdown/src/lib/ngx-infi-markdown.component.ts");



class AppComponent {
    constructor() {
        this.articleStyles = {
            primaryHeader: {
                fontFamily: ['Playfair Display', 'sans-serif'],
                textAlign: 'center',
                fontSize: '72px',
                fontWeight: 600,
                margin: '60px 0',
                color: '#312b80',
            },
            secondaryHeader: {
                fontFamily: ['Playfair Display', 'sans-serif'],
                fontSize: '32px',
                letterSpacing: '.42px',
                fontWeight: 400,
                margin: '0 0 50px',
                color: '#312b80',
            },
            tertiaryHeader: {
                fontFamily: ['Playfair Display', 'sans-serif'],
                fontSize: '42px',
                letterSpacing: '.42px',
                fontWeight: 600,
                margin: '0 0 50px',
                color: '#312b80',
            },
            quaternaryHeader: {
                fontFamily: ['Playfair Display', 'sans-serif'],
                fontStyle: 'normal',
                fontSize: '30px',
                color: 'rgb(61, 90, 254)',
                textAlign: 'center',
            },
            orderedList: {
                fontFamily: ['Playfair Display', 'sans-serif'],
                fontSize: '21px',
                letterSpacing: '.84px',
                color: '#312b80',
            },
            unorderedList: {
                fontFamily: ['Playfair Display', 'sans-serif'],
                fontSize: '21px',
                letterSpacing: '.84px',
                color: '#312b80',
            },
            paragraph: {
                fontFamily: ['Playfair Display', 'sans-serif'],
                fontSize: '21px',
                letterSpacing: '.84px',
                margin: '0 0 50px',
                color: '#312b80',
            },
            quote: {
                fontFamily: ['Playfair Display', 'sans-serif'],
                fontStyle: 'italic',
                fontSize: '24px',
                borderLeft: '1px solid #3d5afe',
                color: 'rgb(49, 43, 128)',
                textAlign: 'left',
            },
        };
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 1, consts: [[1, "container"], ["src", "../assets/logo.png"], [1, "text"], [3, "styles"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "This is a demo of the library. The view presented below will render exactly as it looks, if you install and inject the component into your project. If you notice any issues or bugs, please create an issue in GitHub repository or you can fix it by yourself and create a pull request. I strongly encourage you to create and extend the functionality of this library by pushing your branch with code covered with tests. Enjoy.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "ngx-infi-markdown", 3);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("styles", ctx.articleStyles);
    } }, directives: [_ngx_infi_markdown_src_lib_ngx_infi_markdown_component__WEBPACK_IMPORTED_MODULE_1__["NgxInfiMarkdownComponent"]], styles: [".container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 35px;\n  padding: 0 100px;\n}\n.container[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  margin: 35px 0;\n  display: flex;\n  flex-direction: column;\n}\n.container[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: \"Nunito\", sans-serif;\n  font-size: 22px;\n  margin: 5px 0;\n  line-height: 1.5;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9zb2Jlay9Qcm9qZWN0cy9uZ3gtaW5maS1tYXJrZG93bi9wcm9qZWN0cy9uZ3gtaW5maS1tYXJrZG93bi1zaG93Y2FzZS9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInByb2plY3RzL25neC1pbmZpLW1hcmtkb3duLXNob3djYXNlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0o7QURDSTtFQUNJLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNDUjtBREVJO0VBQ0ksaUNBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQVIiLCJmaWxlIjoicHJvamVjdHMvbmd4LWluZmktbWFya2Rvd24tc2hvd2Nhc2Uvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xuICAgIHBhZGRpbmc6IDAgMTAwcHg7XG5cbiAgICAudGV4dCB7XG4gICAgICAgIG1hcmdpbjogMzVweCAwO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIHAge1xuICAgICAgICBmb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNVxuICAgIH1cbn0iLCIuY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMzVweDtcbiAgcGFkZGluZzogMCAxMDBweDtcbn1cbi5jb250YWluZXIgLnRleHQge1xuICBtYXJnaW46IDM1cHggMDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5jb250YWluZXIgcCB7XG4gIGZvbnQtZmFtaWx5OiBcIk51bml0b1wiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDIycHg7XG4gIG1hcmdpbjogNXB4IDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var projects_ngx_infi_markdown_src_public_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! projects/ngx-infi-markdown/src/public-api */ "../ngx-infi-markdown/src/public-api.ts");
/* harmony import */ var _ngx_infi_markdown_src_lib_ngx_infi_markdown_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../ngx-infi-markdown/src/lib/ngx-infi-markdown.module */ "../ngx-infi-markdown/src/lib/ngx-infi-markdown.module.ts");






class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            projects_ngx_infi_markdown_src_public_api__WEBPACK_IMPORTED_MODULE_3__["NgxInfiMarkdownModule"].forRoot({
                storageType: 'localStorage',
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _ngx_infi_markdown_src_lib_ngx_infi_markdown_module__WEBPACK_IMPORTED_MODULE_4__["NgxInfiMarkdownModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    projects_ngx_infi_markdown_src_public_api__WEBPACK_IMPORTED_MODULE_3__["NgxInfiMarkdownModule"].forRoot({
                        storageType: 'localStorage',
                    })
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch((err) => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/sobek/Projects/ngx-infi-markdown/projects/ngx-infi-markdown-showcase/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map