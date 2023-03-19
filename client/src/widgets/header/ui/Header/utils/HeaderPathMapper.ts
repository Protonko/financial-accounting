export enum TABS {
  EXPENSES = 'expenses',
  CATEGORIES = 'categories',
  REPORTS = 'reports',
}

export class HeaderPathMapper {
  static mapPathToTabValue(path: string) {
    switch (path.match(/\w+/)?.[0]) {
      case TABS.EXPENSES:
        return TABS.EXPENSES
      case TABS.CATEGORIES:
        return TABS.CATEGORIES
      case TABS.REPORTS:
        return TABS.REPORTS
      default:
        return TABS.EXPENSES
    }
  }
}