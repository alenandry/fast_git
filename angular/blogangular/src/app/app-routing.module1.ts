import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './pages/about/about.component';
import { AngularComponent } from './pages/angular/angular.component';
import { BackendComponent } from './pages/backend/backend.component';
import { BashComponent } from './pages/bash/bash.component';
import { DataStructureComponent } from './pages/data-structure/data-structure.component';
import { FontendMlComponent } from './pages/fontend-ml/fontend-ml.component';
import { GitComponent } from './pages/git/git.component';
import { HomeComponent } from './pages/home/home.component';
import { JavaComponent } from './pages/java/java.component';
import { JavascriptComponent } from './pages/javascript/javascript.component';
import { LoginComponent } from './pages/login/login.component';
import { PythonComponent } from './pages/python/python.component';
import { ReactComponent } from './pages/react/react.component';
import { RustComponent } from './pages/rust/rust.component';
import { SearchComponent } from './pages/search/search.component';
import { VueComponent } from './pages/vue/vue.component';
import { AlgorithmSolutionComponent } from './articles/algorithm/algorithm-solution/algorithm-solution.component';
import { BinarySearchTreeComponent } from './articles/algorithm/binary-search-tree/binary-search-tree.component';
import { CodewarComponent } from './articles/algorithm/codewar/codewar.component';
import { JsThisComponent } from './articles/algorithm/js-this/js-this.component';
import { LinkedListComponent } from './articles/algorithm/linked-list/linked-list.component';
import { PrecompileComponent } from './articles/algorithm/precompile/precompile.component';
import { AngularJSTranscludeComponent } from './articles/angular/angular-js-transclude/angular-js-transclude.component';
import { AngularLearnCreatingCustomDirectivesComponent } from './articles/angular/angular-learn-creating-custom-directives/angular-learn-creating-custom-directives.component';
import { AngularLearnWatchComponent } from './articles/angular/angular-learn-watch/angular-learn-watch.component';
import { ControllerCommunicationComponent } from './articles/angular/controller-communication/controller-communication.component';
import { DirectiveCommunicationComponent } from './articles/angular/directive-communication/directive-communication.component';
import { DirectiveNotesComponent } from './articles/angular/directive-notes/directive-notes.component';
import { PostParamsComponent } from './articles/angular/post-params/post-params.component';
import { ReadJsonAngularComponent } from './articles/angular/read-json-angular/read-json-angular.component';
import { SameRouteReloadAngularComponent } from './articles/angular/same-route-reload-angular/same-route-reload-angular.component';
import { NodeNysqlComponent } from './articles/backend/node-nysql/node-nysql.component';
import { BashprofileComponent } from './articles/bash/bashprofile/bashprofile.component';
import { CssNoteComponent } from './articles/css/css-note/css-note.component';
import { UseCssMediaComponent } from './articles/css/use-css-media/use-css-media.component';
import { GitCommitComponent } from './articles/git/git-commit/git-commit.component';
import { GitGuideComponent } from './articles/git/git-guide/git-guide.component';
import { BoolIntComponent } from './articles/java/bool-int/bool-int.component';
import { CodeWarKataComponent } from './articles/java/code-war-kata/code-war-kata.component';
import { RunJarComponent } from './articles/java/run-jar/run-jar.component';
import { CodeWarComponent } from './articles/js/code-war/code-war.component';
import { GettingStartedWithAjaxComponent } from './articles/js/getting-started-with-ajax/getting-started-with-ajax.component';
import { GooleZxComponent } from './articles/js/goole-zx/goole-zx.component';
import { JsImplmentMusicPlayerComponent } from './articles/js/js-implment-music-player/js-implment-music-player.component';
import { JsTutorialMapComponent } from './articles/js/js-tutorial-map/js-tutorial-map.component';
import { JsTutorialMathComponent } from './articles/js/js-tutorial-math/js-tutorial-math.component';
import { JsTutorialObjectComponent } from './articles/js/js-tutorial-object/js-tutorial-object.component';
import { JsTutorialSetComponent } from './articles/js/js-tutorial-set/js-tutorial-set.component';
import { JsTutorialComponent } from './articles/js/js-tutorial/js-tutorial.component';
import { SingleThreadAndAsynchronousComponent } from './articles/js/single-thread-and-asynchronous/single-thread-and-asynchronous.component';
import { TfJsComponent } from './articles/ml/tf-js/tf-js.component';
import { ConvertPesnComponent } from './articles/python/convert-pesn/convert-pesn.component';
import { FindRemoveDirComponent } from './articles/python/find-remove-dir/find-remove-dir.component';
import { WechatTimimgMessageComponent } from './articles/python/wechat-timimg-message/wechat-timimg-message.component';
import { ReactLifeCycleComponent } from './articles/react/react-life-cycle/react-life-cycle.component';
import { ReactRouterComponent } from './articles/react/react-router/react-router.component';
import { ReactThisComponent } from './articles/react/react-this/react-this.component';
import { AddTwoNumbersComponent } from './articles/rust/add-two-numbers/add-two-numbers.component';
import { CompressRustBinarySizeComponent } from './articles/rust/compress-rust-binary-size/compress-rust-binary-size.component';
import { ContainerWithMostWaterComponent } from './articles/rust/container-with-most-water/container-with-most-water.component';
import { EncryptionDataComponent } from './articles/rust/encryption-data/encryption-data.component';
import { FindTwoDiagonalsOfParallelogramComponent } from './articles/rust/find-two-diagonals-of-parallelogram/find-two-diagonals-of-parallelogram.component';
import { ImplementAesEncryptionComponent } from './articles/rust/implement-aes-encryption/implement-aes-encryption.component';
import { IntegerToRomanComponent } from './articles/rust/integer-to-roman/integer-to-roman.component';
import { JewelsAndStonesComponent } from './articles/rust/jewels-and-stones/jewels-and-stones.component';
import { MergeTwoBinaryTreesComponent } from './articles/rust/merge-two-binary-trees/merge-two-binary-trees.component';
import { PalindromeNumberComponent } from './articles/rust/palindrome-number/palindrome-number.component';
import { ParseTypesComponent } from './articles/rust/parse-types/parse-types.component';
import { PermutationsComponent } from './articles/rust/permutations/permutations.component';
import { ReverseIntegerComponent } from './articles/rust/reverse-integer/reverse-integer.component';
import { RobotReturnToOriginComponent } from './articles/rust/robot-return-to-origin/robot-return-to-origin.component';
import { RustGrammerComponent } from './articles/rust/rust-grammer/rust-grammer.component';
import { RustGuiDvelopComponent } from './articles/rust/rust-gui-dvelop/rust-gui-dvelop.component';
import { RustImplementTreeComponent } from './articles/rust/rust-implement-tree/rust-implement-tree.component';
import { RustImplmentMatrixComponent } from './articles/rust/rust-implment-matrix/rust-implment-matrix.component';
import { SameTreeComponent } from './articles/rust/same-tree/same-tree.component';
import { StringToIntegerComponent } from './articles/rust/string-to-integer/string-to-integer.component';
import { SudokuSolverComponent } from './articles/rust/sudoku-solver/sudoku-solver.component';
import { ToLowerCaseComponent } from './articles/rust/to-lower-case/to-lower-case.component';
import { TwoSumComponent } from './articles/rust/two-sum/two-sum.component';
import { UniqueMorseCodeWordsComponent } from './articles/rust/unique-morse-code-words/unique-morse-code-words.component';
import { UniqueVecComponent } from './articles/rust/unique-vec/unique-vec.component';
import { ValidSudokuComponent } from './articles/rust/valid-sudoku/valid-sudoku.component';
import { ZigzagConversionComponent } from './articles/rust/zigzag-conversion/zigzag-conversion.component';
import { VueAjaxComponent } from './articles/vue/vue-ajax/vue-ajax.component';
import { VueAnimationComponent } from './articles/vue/vue-animation/vue-animation.component';
import { VuePostPropsComponent } from './articles/vue/vue-post-props/vue-post-props.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'rust', component: RustComponent },
  { path: 'backend', component: BackendComponent },
  { path: 'fontend_ml', component: FontendMlComponent },
  { path: 'javascript', component: JavascriptComponent },
  { path: 'python', component: PythonComponent },
  { path: 'java', component: JavaComponent },
  { path: 'vue', component: VueComponent },
  { path: 'react', component: ReactComponent },
  { path: 'angular', component: AngularComponent },
  { path: 'git', component: GitComponent },
  { path: 'bash', component: BashComponent },
  { path: 'data_structure', component: DataStructureComponent },
  { path: 'search', component: SearchComponent },
  { path: 'login', component: LoginComponent },
  { path: '71', component: UniqueMorseCodeWordsComponent },
  { path: '70', component: JewelsAndStonesComponent },
  { path: '69', component: RobotReturnToOriginComponent },
  { path: '68', component: MergeTwoBinaryTreesComponent },
  { path: '67', component: ToLowerCaseComponent },
  { path: '66', component: SameTreeComponent },
  { path: '65', component: ImplementAesEncryptionComponent },
  { path: '64', component: RustImplementTreeComponent },
  { path: '63', component: CompressRustBinarySizeComponent },
  { path: '62', component: EncryptionDataComponent },
  { path: '61', component: UniqueVecComponent },
  { path: '60', component: TfJsComponent },
  { path: '59', component: UseCssMediaComponent },
  { path: '59', component: UseCssMediaComponent },
  { path: '58', component: JsImplmentMusicPlayerComponent },
  { path: '57', component: RustImplmentMatrixComponent },
  { path: '56', component: RustGrammerComponent },
  { path: '55', component: CodeWarKataComponent },
  { path: '54', component: BashprofileComponent },
  { path: '53', component: CodewarComponent },
  { path: '52', component: JsThisComponent },
  { path: '51', component: PrecompileComponent },
  { path: '50', component: RustGuiDvelopComponent },
  { path: '49', component: RunJarComponent },
  { path: '48', component: GettingStartedWithAjaxComponent },
  { path: '47', component: PostParamsComponent },
  { path: '46', component: ReadJsonAngularComponent },
  { path: '45', component: SameRouteReloadAngularComponent },
  { path: '44', component: ParseTypesComponent },
  { path: '43', component: GitCommitComponent },
  { path: '42', component: SingleThreadAndAsynchronousComponent },
  { path: '41', component: BoolIntComponent },
  { path: '40', component: GitGuideComponent },
  { path: '39', component: GooleZxComponent },
  { path: '38', component: AlgorithmSolutionComponent },
  { path: '37', component: VueAnimationComponent },
  { path: '36', component: VuePostPropsComponent },
  { path: '35', component: VueAjaxComponent },
  { path: '34', component: ReactLifeCycleComponent },
  { path: '33', component: ReactRouterComponent },
  { path: '32', component: ReactThisComponent },
  { path: '31', component: NodeNysqlComponent },
  { path: '30', component: CssNoteComponent },
  { path: '29', component: AngularLearnWatchComponent },
  { path: '28', component: AngularLearnCreatingCustomDirectivesComponent },
  { path: '27', component: DirectiveNotesComponent },
  { path: '26', component: ControllerCommunicationComponent },
  { path: '25', component: AngularJSTranscludeComponent },
  { path: '24', component: DirectiveCommunicationComponent },
  { path: '23', component: JsTutorialComponent },
  { path: '22', component: JsTutorialObjectComponent },
  { path: '21', component: JsTutorialMathComponent },
  { path: '20', component: JsTutorialSetComponent },
  { path: '19', component: JsTutorialMapComponent },
  { path: '18', component: ConvertPesnComponent },
  { path: '17', component: FindRemoveDirComponent },
  { path: '16', component: WechatTimimgMessageComponent },
  { path: '15', component: CodeWarComponent },
  { path: '14', component: LinkedListComponent },
  { path: '13', component: BinarySearchTreeComponent },
  { path: '12', component: FindTwoDiagonalsOfParallelogramComponent },
  { path: '11', component: TwoSumComponent },
  { path: '10', component: AddTwoNumbersComponent },
  { path: '9', component: ZigzagConversionComponent },
  { path: '8', component: ReverseIntegerComponent },
  { path: '7', component: StringToIntegerComponent },
  { path: '6', component: PalindromeNumberComponent },
  { path: '5', component: IntegerToRomanComponent },
  { path: '4', component: ContainerWithMostWaterComponent },
  { path: '3', component: ValidSudokuComponent },
  { path: '2', component: SudokuSolverComponent },
  { path: '1', component: PermutationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
