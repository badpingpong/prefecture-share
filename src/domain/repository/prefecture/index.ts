import { Prefecture } from "@domain/models";
import { IPrefectureDriver } from "@infrastructure/prefecture";
import { IPrefectureRepository, IPrefectureTranslator } from "./type";

export class PrefectureRepository implements IPrefectureRepository {
  constructor(
    private readonly driver: IPrefectureDriver,
    private readonly translator: IPrefectureTranslator
  ) {}

  async readAll(): Promise<Prefecture[]> {
    const res = await this.driver.fetchAll();
    return this.translator.translatePrefectures(res);
  }
}
