import * as U from "@application/usecase";
import * as R from "@domain/repository";
import * as D from "@infrastructure/index";

// ここでDIを行う
class CompositionRoot {
  static resolve(): CompositionRoot {
    return new CompositionRoot();
  }

  public get GetPrefectureList(): U.IGetPrefectureListUseCase {
    return new U.GetPrefectureListUseCase(
      new R.PrefectureRepository(
        new D.PrefectureMockDriver(),
        new R.PrefectureTranslator()
      )
    );
  }
}

const composition = CompositionRoot.resolve();
export { composition };
