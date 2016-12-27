using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace knockout_require_director.Models
{
    public class Property
    {
        #region 无参属性 （属性的get访问器不接受参数）

        //无参属性:  可以轻松的获取或者设置它的状态信息
        public string Name;

        private Int32 m_Age;

        public Int32 get_Age() 
        {
            return m_Age;
        }

        public void set_Age(Int32 value) 
        {
            m_Age = value;
        }


        //自动实现属性
        public string Company { get; set; }

        #endregion


        #region 有参属性：索引器 （get访问器方法接受一个或多个参数，set访问器方法接受两个或多个参数。） c#成为所引器

        private Hashtable name = new Hashtable();

        //索引器必须以this关键字定义，其实这个this就是类实例化之后的对象
        public string this[int index]
        {
            get { return name[index].ToString(); }
            set { name.Add(index, value); }
        }

        public int this[string aName]
        {
            get 
            {
                foreach (DictionaryEntry d in name)
                {
                    if (d.Value.ToString() == aName) 
                    {
                        return Convert.ToInt32(d.Key);
                    }
                }

                return -1;
            }
            set
            {
                name.Add(value, aName);
            }
        }

        #endregion
    }
}